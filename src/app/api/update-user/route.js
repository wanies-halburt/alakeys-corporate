import connectMongoDB from "@/dbConfig/mongodb";
import { throwUserResponse } from "@/utils";
import Client from "../register/register.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

connectMongoDB();

async function updatePassword(userId, oldPassword, newPassword) {
  const user = await Client.findById(userId);
  const isMatch = await bcrypt.compare(oldPassword, user.password);
  console.log("userId", userId);
  console.log("old", oldPassword);
  console.log("new", newPassword);

  if (!isMatch) {
    console.log("no match");
    throw Error("Old password is incorrect");
  }

  user.password = await bcrypt.hash(newPassword, 8);
  console.log("user pass", user.password);
  await user.save();
  console.log("user password", user);
}

export async function PATCH(req) {
  const token = req.headers.get("authorization");
  const reqBody = await req.json();

  if (!token) {
    return throwUserResponse({
      status: 401,
      success: false,
      message: "Unauthorized",
    });
  }

  try {
    const decoded = jwt.verify(token, "secret");
    const userId = decoded._id;

    if (reqBody.newPassword) {
      await updatePassword(userId, reqBody.oldPassword, reqBody.newPassword);
    }

    const user = await Client.findById(userId);
    if (!user) {
      return throwUserResponse({
        status: 404,
        success: false,
        message: "User not found",
      });
    }
    user.userName = reqBody.userName;
    user.fullName = reqBody.fullName;
    user.phone = reqBody.phone;
    await user.save();
    return throwUserResponse({
      status: 200,
      success: true,
      message: "User details successfully updated",
      data: user,
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

export const config = {
  type: "experimental-background",
};
