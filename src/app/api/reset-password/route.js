import connectMongoDB from "@/dbConfig/mongodb";
import { throwUserResponse } from "@/utils";

import requiredReqBodyCheck from "../middleware/requiredReqBodyCheck";
import Client from "../register/register.model";
import generateOtp from "@/utils/generateOtp";

connectMongoDB();

export async function POST(req) {
  try {
    const reqBody = await req.json();

    const reqBodyCheck = requiredReqBodyCheck(reqBody, [
      "email",
      "otp",
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

    user.password = reqBody.password;
    user.otp = undefined;
    await user.save();
    return throwUserResponse({
      status: 200,
      success: true,
      message: "Password updated successfully",
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
