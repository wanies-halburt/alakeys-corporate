import connectMongoDB from "@/dbConfig/mongodb";
import { throwUserResponse } from "@/utils";
import Client from "../register/register.model";
import jwt from "jsonwebtoken";

connectMongoDB();

export async function GET(req) {
  const token = req.headers.get("authorization");

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

    const user = await Client.findById(userId).populate("cart.product");
    if (!user) {
      return throwUserResponse({
        status: 404,
        success: false,
        message: "User not found",
      });
    }
    return throwUserResponse({
      status: 200,
      success: true,
      message: "Successful",
      data: user.cart,
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
