import path from "path";
import { parseHtmlFile } from "../email/templates";

export const forgetPasswordAutoRespEmailBody = ({ firstname, otp }) => {
  const variable = [
    {
      variable: "FIRST_NAME",
      value: firstname,
    },
    {
      variable: "FOS_EMAIL",
      value: process.env.FOS_SALES_MAIL,
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
    "forgot_password_resp.html"
  );
  const mailBody = parseHtmlFile(filePath, variable);

  return mailBody;
};
