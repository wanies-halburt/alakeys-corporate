import connectMongoDB from "@/dbConfig/mongodb";
import { throwUserResponse } from "@/utils";
import debugConsole from "@/utils/debugger";
import { NextRequest } from "next/server";
import { addContactToMDsubscribeNewsletterGroup } from "../email/service/maildrip";
import { limiter } from "../middleware/limiter";
import requiredReqBodyCheck from "../middleware/requiredReqBodyCheck";
import Client from "../register/register.model";

connectMongoDB();

export async function POST(req) {
  try {
    const reqBody = await req.json();

    const reqBodyCheck = requiredReqBodyCheck(reqBody, ["email", "otp"]);

    if (reqBodyCheck.status !== 200) {
      return reqBodyCheck;
    }

    const user = await Client.findOne({
      email: reqBody.email,
      otp: reqBody.otp,
    });
    if (!user) {
      return throwUserResponse({
        status: 400,
        success: false,
        message: "Invalid OTP or email",
      });
    }
    let userWithoutPassword;
    user.isVerified = true;
    user.otp = undefined;
    await user.save();
    const token = await user.generateAuthToken();

    userWithoutPassword = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      userName: user.userName,
      isVerified: user.isVerified,
    };
    return throwUserResponse({
      status: 200,
      success: true,
      message: "Account verified successfully",
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
