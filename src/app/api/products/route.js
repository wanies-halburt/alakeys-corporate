import connectMongoDB from "@/dbConfig/mongodb";
import { throwUserResponse } from "@/utils";
import requiredReqBodyCheck from "../middleware/requiredReqBodyCheck";
import Product from "./products.model";

connectMongoDB();

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const reqBodyCheck = requiredReqBodyCheck(reqBody, [
      "title",
      "category",
      "tag",
      "description",
      "img",
      "price",
    ]);
    if (reqBodyCheck.status !== 200) {
      return reqBodyCheck;
    }
    const existingProduct = await Product.findOne({
      title: reqBody.title,
    });
    if (!existingProduct) {
      const newProduct = new Product({ ...reqBody });
      await newProduct.save();
      console.log(`Added ${reqBody.title}`);
    } else {
      console.log(`${reqBody.title} already exists`);
    }
    return throwUserResponse({
      status: 200,
      success: true,
      message: "Seeding successful",
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
