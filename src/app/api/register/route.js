import connectMongoDB from "@/dbConfig/mongodb";
import { throwUserResponse } from "@/utils";
import generateOtp from "@/utils/generateOtp";
import debugConsole from "@/utils/debugger";
import { IS_ADMIN_CONFIG } from "../email/config";
import { sendMailWithNM } from "../email/service";
import requiredReqBodyCheck from "../middleware/requiredReqBodyCheck";
import { registerAutoRespEmailBody } from "./register.email";
import Client from "./register.model";

connectMongoDB();

export async function POST(req) {
  try {
    const reqBody = await req.json();

    const reqBodyCheck = requiredReqBodyCheck(reqBody, [
      "fullName",
      "email",
      "userName",
      "password",
      "confirmPassword",
    ]);

    if (reqBodyCheck.status !== 200) {
      return reqBodyCheck;
    }

    if (reqBody.password !== reqBody.confirmPassword) {
      return throwUserResponse({
        status: 401,
        success: true,
        message: "password and confirm password do not match",
      });
    }

    const customerExists = await Client.findOne({
      email: reqBody.email,
    });
    const customerFirstName = reqBody.fullName.split(" ")[0];
    const customerLastName = reqBody.fullName.split(" ")[1];
    if (customerExists) {
      if (!customerExists.isVerified) {
        const otp = generateOtp();
        customerExists.otp = otp;
        const mailOptions = {
          from: process.env.FOS_SEND_MAIL_FROM,
          to: reqBody.email,
          subject: `Thank You for Registering on Alakeys`,
          bcc: IS_ADMIN_CONFIG ? process.env.FOS_SEND_MAIL_FROM : undefined,
          html: registerAutoRespEmailBody({
            firstname: customerFirstName,
            otp: otp,
          }),
          // dsn: {
          //   id: `${reqBody.fullName}-${reqBody.email}`,
          //   return: "headers",
          //   notify: ["failure", "delay"],
          //   recipient: process.env.FOS_SEND_MAIL_FROM,
          // },
        };
        await sendMailWithNM(mailOptions);
        await customerExists.save();
        return throwUserResponse({
          status: 400,
          success: true,
          message:
            "User is already registered but not verified. A new OTP has been sent to your email.",
        });
      }
      if (customerExists.email === reqBody.email) {
        return throwUserResponse({
          status: 400,
          success: true,
          message: "You are already registered, please log in to proceed",
        });
      }
    }

    let token;
    let userWithoutPassword;
    const otp = generateOtp();
    const newRegisterEntry = new Client({
      ...reqBody,
      otp: otp,
    });
    const loggedResteredUser = await newRegisterEntry.save();

    const mailOptions = {
      from: process.env.FOS_SEND_MAIL_FROM,
      to: reqBody.email,
      subject: `Thank You for Registering on Alakeys`,
      bcc: IS_ADMIN_CONFIG ? process.env.FOS_SEND_MAIL_FROM : undefined,
      html: registerAutoRespEmailBody({
        firstname: customerFirstName,
        otp: otp,
      }),
      // dsn: {
      //   id: `${reqBody.fullName}-${loggedResteredUser?._id}`,
      //   return: "headers",
      //   notify: ["failure", "delay"],
      //   recipient: process.env.FOS_SEND_MAIL_FROM,
      // },
    };
    await sendMailWithNM(mailOptions);

    token = await loggedResteredUser.generateAuthToken();
    userWithoutPassword = {
      _id: loggedResteredUser._id,
      id: loggedResteredUser._id,
      fullName: loggedResteredUser.fullName,
      email: loggedResteredUser.email,
      userName: loggedResteredUser.userName,
      isVerified: loggedResteredUser.isVerified,
    };

    return throwUserResponse({
      status: 200,
      success: true,
      message: "Registration successful",
      data: {
        token: token,
        user: userWithoutPassword,
      },
    });
  } catch (error) {
    return throwUserResponse({
      status: 500,
      success: false,
      message: error?.message,
      errorStack: error,
    });
  }
}

export const dynamic = "force-dynamic";
