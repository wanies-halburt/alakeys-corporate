import path from "path";
import { parseHtmlFile } from "../email/templates";

export const registerAutoRespEmailBody = ({ firstname, otp }) => {
  const variable = [
    {
      variable: "FIRST_NAME",
      value: firstname,
    },
    {
      variable: "FOS_EMAIL",
      value: process.env.FOS_SEND_MAIL_FROM,
    },
    {
      variable: "FOS_OTP",
      value: otp ?? "",
    },
  ];
  const filePath = path.join(
    process.cwd(),
    "src",
    "app",
    "api",
    "email",
    "templates",
    "register_to_attend_resp.html"
  );
  const mailBody = parseHtmlFile(filePath, variable);

  return mailBody;
};
