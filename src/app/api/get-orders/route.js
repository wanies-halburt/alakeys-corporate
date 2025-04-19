import connectMongoDB from "@/dbConfig/mongodb";
import { throwUserResponse } from "@/utils";
import Checkout from "../checkout/checkout.model";
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
    const checkouts = await Checkout.find({ user: userId })
      .populate("products.product")
      .populate("user");
    if (!checkouts) {
      return throwUserResponse({
        status: 404,
        success: false,
        message: "No order history found",
      });
    }
    return throwUserResponse({
      status: 200,
      success: true,
      message: "Successful",
      data: checkouts,
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
