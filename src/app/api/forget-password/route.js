import connectMongoDB from "@/dbConfig/mongodb";
import { throwUserResponse } from "@/utils";
import { forgetPasswordAutoRespEmailBody } from "./forgetPassword.email";
import debugConsole from "@/utils/debugger";
import { NextRequest } from "next/server";
import { limiter } from "../middleware/limiter";
import { sendMailWithNM } from "../email/service";
import requiredReqBodyCheck from "../middleware/requiredReqBodyCheck";
import Client from "../register/register.model";
import generateOtp from "@/utils/generateOtp";

connectMongoDB();

export async function POST(req) {
  try {
    const reqBody = await req.json();

    const reqBodyCheck = requiredReqBodyCheck(reqBody, ["email"]);
    if (reqBodyCheck.status !== 200) {
      return reqBodyCheck;
    }

    const user = await Client.findOne({
      email: reqBody.email,
    });
    if (!user) {
      return throwUserResponse({
        status: 400,
        success: false,
        message: "Email address is not tied to a user",
      });
    }
    const otp = generateOtp();
    user.otp = otp;
    await user.save();

    const mailOptions = {
      from: process.env.FOS_SEND_MAIL_FROM,
      to: reqBody.email,
      subject: `Reset Password`,
      bcc: process.env.FOS_SALES_MAIL,
      html: forgetPasswordAutoRespEmailBody({
        firstname: user.fullName,
        otp: otp,
      }),
      // dsn: {
      //   id: `${user.fullName}`,
      //   return: "headers",
      //   notify: ["failure", "delay"],
      //   recipient: process.env.FOS_SEND_MAIL_FROM,
      // },
    };
    await sendMailWithNM(mailOptions);

    return throwUserResponse({
      status: 200,
      success: true,
      message: "Reset password request sent successfully",
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
