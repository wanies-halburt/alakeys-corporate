import connectMongoDB from "@/dbConfig/mongodb";
import { throwUserResponse } from "@/utils";
import debugConsole from "@/utils/debugger";
import { IS_ADMIN_CONFIG } from "../email/config";
import { sendMailWithNM } from "../email/service";
import { addContactToMDcontactsGroup } from "../email/service/maildrip";
import requiredReqBodyCheck from "../middleware/requiredReqBodyCheck";
import { contactUsAutoRespEmailBody } from "./contactus.email";
import ContactUsModel from "./contactus.model";

connectMongoDB();

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const { email, customerName } = reqBody;

    const reqBodyCheck = requiredReqBodyCheck(reqBody, [
      "email",
      "customerName",
      "message",
    ]);

    if (reqBodyCheck.status !== 200) {
      return reqBodyCheck;
    }

    const customerExists = await ContactUsModel.findOne({ email });

    let loggedCustomerEnquiry;

    if (customerExists) {
      loggedCustomerEnquiry = new Date().toISOString();
    } else {
      const newCustomerEnquiry = new ContactUsModel({
        ...reqBody,
      });

      loggedCustomerEnquiry = await newCustomerEnquiry.save();
      debugConsole({ loggedCustomerEnquiry });
    }

    const customerFirstName = customerName.split(" ")[0];
    const customerLastName = customerName.split(" ")[1];
    const mailOptions = {
      from: process.env.FOS_SEND_MAIL_FROM,
      to: email,
      subject: `Thank You for Contacting Us ${customerFirstName}🌟`,
      bcc: IS_ADMIN_CONFIG ? process.env.FOS_SEND_MAIL_FROM : undefined,
      html: contactUsAutoRespEmailBody({
        firstname: customerFirstName,
        ...reqBody,
      }),
      dsn: {
        id: `${customerName}-${loggedCustomerEnquiry?._id}`,
        return: "headers",
        notify: ["failure", "delay"],
        recipient: process.env.FOS_SEND_MAIL_FROM,
      },
    };

    await sendMailWithNM(mailOptions);

    if (!customerExists) {
      const mdAddContact = await addContactToMDcontactsGroup({
        firstName: customerFirstName,
        lastName: customerLastName,
        email: reqBody.email,
      });
      if (!mdAddContact?.ok) {
        return mdAddContact;
      }
    }

    return throwUserResponse({
      status: 200,
      success: true,
      message: "Message sent, you'll be responded to shortly.",
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
