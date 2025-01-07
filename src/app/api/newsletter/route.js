import connectMongoDB from "@/dbConfig/mongodb";
import { throwUserResponse } from "@/utils";
import debugConsole from "@/utils/debugger";
import { NextRequest } from "next/server";
import { addContactToMDsubscribeNewsletterGroup } from "../email/service/maildrip";
import { limiter } from "../middleware/limiter";
import requiredReqBodyCheck from "../middleware/requiredReqBodyCheck";
import SubscribeNewsletterModel from "./newsletter.model";

connectMongoDB();

export async function POST(req) {
  try {
    const reqBody = await req.json();

    const reqBodyCheck = requiredReqBodyCheck(reqBody, ["email"]);

    if (reqBodyCheck.status !== 200) {
      return reqBodyCheck;
    }

    const remaining = await limiter.removeTokens(1);

    if (remaining < 0) {
      return throwUserResponse({
        status: 429,
        statusText: "Too Many Requests",
        success: false,
        message: "Too many requests",
      });
    }

    const customerExists = await SubscribeNewsletterModel.findOne({
      email: reqBody.email,
    });

    if (customerExists) {
      return throwUserResponse({
        status: 400,
        success: true,
        message: "You are already a subscriber",
      });
    }

    const newSubscriberEntry = new SubscribeNewsletterModel({
      ...reqBody,
    });

    const loggedSubscriber = await newSubscriberEntry.save();
    debugConsole({ loggedSubscriber });
    const customerFirstName = reqBody.email.split("@")[0];

    const mdAddContact = await addContactToMDsubscribeNewsletterGroup({
      firstName: customerFirstName,
      email: reqBody.email,
    });
    if (!mdAddContact?.ok) {
      return mdAddContact;
    }

    return throwUserResponse({
      status: 200,
      success: true,
      message: "Thank you for subscribing!",
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
