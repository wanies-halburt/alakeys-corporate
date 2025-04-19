import connectMongoDB from "@/dbConfig/mongodb";
import { throwUserResponse } from "@/utils";
import Client from "../register/register.model";
import Checkout from "./checkout.model";
import requiredReqBodyCheck from "../middleware/requiredReqBodyCheck";
import jwt from "jsonwebtoken";
import { IS_ADMIN_CONFIG } from "../email/config";
import { sendMailWithNM } from "../email/service";
import {
  checkoutAdminAutoRespEmailBody,
  checkoutAutoRespEmailBody,
} from "./checkout.email";

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

  try {
    const reqBodyCheck = requiredReqBodyCheck(reqBody, [
      "companyName",
      "address",
      "state",
      "country",
      "message",
      "totalPrice",
      "phone",
      "firstName",
      "lastName",
    ]);

    if (reqBodyCheck.status !== 200) {
      return reqBodyCheck;
    }
    const decoded = jwt.verify(token, "secret");
    const userId = decoded._id;
    let user = await Client.findById(userId);
    if (!user) {
      return throwUserResponse({
        status: 404,
        success: false,
        message: "User not found",
      });
    }
    const clientAddress = `${reqBody.address}, ${reqBody.state}. ${reqBody.country}`;
    const checkout = new Checkout({
      user: userId,
      products: user.cart.map((product) => ({
        product: product.product,
        quantity: 1,
      })),
      totalPrice: reqBody.totalPrice,
      paymentStatus: "pending",
      paymentMethod: "bank-transfer",
      country: reqBody.country,
      state: reqBody.state,
      address: reqBody.address,
      companyName: reqBody.companyName,
      message: reqBody.message,
      firstName: reqBody.firstName,
      lastName: reqBody.lastName,
      phone: reqBody.phone,
    });
    await checkout.save();
    // Update user's productsPurchased

    user = await Client.findByIdAndUpdate(
      userId,
      { $set: { cart: [] } },
      { new: true }
    );
    user.phone = reqBody.phone;
    user.productsPurchased.push(...checkout.products);
    await user.save();

    const customerFirstName = user.fullName.split(" ")[0];

    // mail sent to the client
    const mailOptions = {
      from: process.env.FOS_SEND_MAIL_FROM,
      to: user.email,
      subject: `Thank You for purchasing a service on Alakeys`,
      bcc: IS_ADMIN_CONFIG ? process.env.FOS_SEND_MAIL_FROM : undefined,
      html: checkoutAutoRespEmailBody({
        firstname: customerFirstName,
        orderId: checkout._id,
        price: reqBody.totalPrice,
      }),
      // dsn: {
      //   id: `${user.fullName}-${user?._id}`,
      //   return: "headers",
      //   notify: ["failure", "delay"],
      //   recipient: process.env.FOS_SEND_MAIL_FROM,
      // },
    };
    // mail sent to Admn
    const adminMailOptions = {
      from: process.env.FOS_SEND_MAIL_FROM,
      to: process.env.FOS_SALES_MAIL,
      subject: `Purchase made by ${user.fullName}`,
      bcc: IS_ADMIN_CONFIG
        ? process.env.FOS_SEND_MAIL_FROM
        : process.env.FOS_SALES_MAIL,
      html: checkoutAdminAutoRespEmailBody({
        customerName: user.fullName,
        address: clientAddress,
        email: user.email,
        orderId: checkout._id,
        message: reqBody.message,
        price: reqBody.totalPrice,
      }),
      dsn: {
        id: `${user.fullName}-${user?._id}`,
        return: "headers",
        notify: ["failure", "delay"],
        recipient: process.env.FOS_SEND_MAIL_FROM,
      },
    };
    await sendMailWithNM(mailOptions);
    await sendMailWithNM(adminMailOptions);
    return throwUserResponse({
      status: 200,
      success: true,
      message: "Checkout successful, your payment status is being verified",
      data: user.productsPurchased,
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
