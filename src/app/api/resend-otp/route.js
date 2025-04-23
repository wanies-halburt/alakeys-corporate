import connectMongoDB from "@/dbConfig/mongodb";
import { throwUserResponse } from "@/utils";
import generateOtp from "@/utils/generateOtp";
import { IS_ADMIN_CONFIG } from "../email/config";
import { sendMailWithNM } from "../email/service";
import requiredReqBodyCheck from "../middleware/requiredReqBodyCheck";
import { registerAutoRespEmailBody } from "../register/register.email";
import Client from "../register/register.model";

connectMongoDB();

export async function POST(req) {
  try {
    const reqBody = await req.json();

    const reqBodyCheck = requiredReqBodyCheck(reqBody, ["email"]);
    if (reqBodyCheck.status !== 200) {
      return reqBodyCheck;
    }
    const customerExists = await Client.findOne({
      email: reqBody.email,
    });
    if (customerExists) {
      if (!customerExists.isVerified) {
        const otp = generateOtp();
        customerExists.otp = otp;
        const mailOptions = {
          from: process.env.FOS_SEND_MAIL_FROM,
          to: reqBody.email,
          subject: `New OTP`,
          bcc: IS_ADMIN_CONFIG ? process.env.FOS_SALES_MAIL : undefined,
          html: registerAutoRespEmailBody({
            firstname: customerExists.fullName.split(" ")[0],
            otp: otp,
          }),
          //   dsn: {
          //     id: `${customerExists.fullName}-${customerExists.email}`,
          //     return: "headers",
          //     notify: ["failure", "delay"],
          //     recipient: process.env.FOS_SEND_MAIL_FROM,
          //   },
        };
        await sendMailWithNM(mailOptions);
        await customerExists.save();
        return throwUserResponse({
          status: 200,
          success: true,
          message: "A new OTP has been sent to your email.",
        });
      }
      if (customerExists.email === reqBody.email) {
        return throwUserResponse({
          status: 400,
          success: true,
          message: "You are already verified, please log in to proceed",
        });
      }
    } else {
      return throwUserResponse({
        status: 400,
        success: true,
        message: "User not found, please register first to proceed",
      });
    }
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
