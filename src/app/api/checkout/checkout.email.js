import path from "path";
import { parseHtmlFile } from "../email/templates";

export const checkoutAutoRespEmailBody = ({ firstname, price }) => {
  const variable = [
    {
      variable: "FIRST_NAME",
      value: firstname,
    },
    {
      variable: "PRICE",
      value: price,
    },
    {
      variable: "FOS_EMAIL",
      value: process.env.FOS_SALES_MAIL,
    },
  ];
  const filePath = path.join(
    process.cwd(),
    "src",
    "app",
    "api",
    "email",
    "templates",
    "checkout_auto_resp.html"
  );
  const mailBody = parseHtmlFile(filePath, variable);

  return mailBody;
};

export const checkoutAdminAutoRespEmailBody = ({
  address,
  customerName,
  email,
  message,
  price,
}) => {
  const variable = [
    {
      variable: "CUS_ADDRESS",
      value: address,
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
    {
      variable: "PRICE",
      value: price,
    },
  ];
  const filePath = path.join(
    process.cwd(),
    "src",
    "app",
    "api",
    "email",
    "templates",
    "checkout_admin_auto_resp.html"
  );
  const mailBody = parseHtmlFile(filePath, variable);

  return mailBody;
};
