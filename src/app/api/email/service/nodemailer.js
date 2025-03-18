import debugConsole from "@/utils/debugger";
import nodemailer from "nodemailer";
import {
  // IS_ADMIN_CONFIG,
  NODE_MAILDER_CONFIG_OPTIONS,
  // NODE_MAILDER_CONFIG_OPTIONS_ADMIN,
} from "../config";

// const transporter = nodemailer.createTransport(
//   IS_ADMIN_CONFIG
//     ? NODE_MAILDER_CONFIG_OPTIONS_ADMIN
//     : NODE_MAILDER_CONFIG_OPTIONS
// );
const transporter = nodemailer.createTransport(NODE_MAILDER_CONFIG_OPTIONS);
console.log("transporter", transporter);

transporter.verify(function (error, _success) {
  if (error) {
    debugConsole(error);
  } else {
    debugConsole("Server is ready to take our messages");
  }
});

export const sendMailWithNM = async (option) => {
  try {
    const mailresponse = await transporter.sendMail({ ...option });
    debugConsole({ mailresponse });
    return mailresponse;
  } catch (error) {
    throw new Error(error.message);
  }
};
