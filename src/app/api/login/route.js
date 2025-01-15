import connectMongoDB from "@/dbConfig/mongodb";
import { throwUserResponse } from "@/utils";
import requiredReqBodyCheck from "../middleware/requiredReqBodyCheck";
import Client from "../register/register.model";

connectMongoDB();

export async function POST(req) {
  try {
    const reqBody = await req.json();

    const reqBodyCheck = requiredReqBodyCheck(reqBody, ["email", "password"]);

    if (reqBodyCheck.status !== 200) {
      return reqBodyCheck;
    }

    const user = await Client.findByCredentials(
      reqBody.email,
      reqBody.password
    );
    if (!user) {
      return throwUserResponse({
        status: 400,
        success: false,
        message: "Login failed! Check authenthication credentails",
      });
    }
    let userWithoutPassword;
    await user.save();
    const token = await user.generateAuthToken();

    userWithoutPassword = {
      _id: user._id,
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      userName: user.userName,
      isVerified: user.isVerified,
    };
    return throwUserResponse({
      status: 200,
      success: true,
      message: "Login success",
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
