import connectMongoDB from "@/dbConfig/mongodb";
import { throwUserResponse } from "@/utils";
import Product from "../products/products.model";
import { URL } from "url";

connectMongoDB();

export async function GET(req) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  try {
    if (id) {
      const product = await Product.findById(id);
      if (!product) {
        return throwUserResponse({
          status: 404,
          success: false,
          message: "Product not found",
        });
      } else {
        return throwUserResponse({
          status: 200,
          success: true,
          message: "Successful",
          data: product,
        });
      }
    } else {
      const products = await Product.find();
      return throwUserResponse({
        status: 200,
        success: true,
        message: "Registration successful",
        data: products,
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
