import connectMongoDB from "@/dbConfig/mongodb";
import { throwUserResponse } from "@/utils";
import Client from "../register/register.model";
import Product from "../products/products.model";
import jwt from "jsonwebtoken";

connectMongoDB();

export async function POST(req) {
  const token = req.headers.get("authorization");
  const reqBody = await req.json();

  if (!token) {
    return throwUserResponse({
      status: 401,
      success: false,
      message: "Unauthorized",
    });
  }
  const productId = reqBody.productId;

  try {
    const decoded = jwt.verify(token, "secret");
    const userId = decoded._id;
    const user = await Client.findById(userId);
    if (!user) {
      return throwUserResponse({
        status: 404,
        success: false,
        message: "User not found",
      });
    }
    const existingProduct = await Product.findById(productId);
    if (!existingProduct) {
      return throwUserResponse({
        status: 404,
        success: false,
        message: "Product not found",
      });
    }

    const existingFavourite = user.favourites.some(
      (favourite) =>
        favourite.product &&
        favourite.product.toString() === productId.toString()
    );

    if (existingFavourite) {
      user.favourites = user.favourites.filter(
        (favourite) =>
          favourite.product &&
          favourite.product.toString() !== productId.toString()
      );

      await user.save();
      return throwUserResponse({
        status: 200,
        success: true,
        message: "Product removed from favorites",
        data: { user: user.favourites },
      });
    } else {
      user.favourites = [...user.favourites, { product: productId }];

      await user.save();
      return throwUserResponse({
        status: 200,
        success: true,
        message: "Product added to favorites",
        data: { user: user.favourites },
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
