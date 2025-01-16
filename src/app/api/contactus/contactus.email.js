import path from "path";
import { parseHtmlFile } from "../email/templates";

export const contactUsAutoRespEmailBody = ({
  firstname,
  customerName,
  email,
  message,
}) => {
  const variable = [
    {
      variable: "FIRST_NAME",
      value: firstname,
    },
    {
      variable: "CUS_FULL_NAME",
      value: customerName,
    },
    {
      variable: "CUS_EMAIL",
      value: email,
    },
    {
      variable: "CUS_MESSAGE",
      value: message,
    },
  ];
  const filePath = path.join(
    process.cwd(),
    "src",
    "app",
    "api",
    "email",
    "templates",
    "contact_us_auto_resp.html"
  );
  const mailBody = parseHtmlFile(filePath, variable);

  return mailBody;
};
