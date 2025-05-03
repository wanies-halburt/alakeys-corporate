import path from "path";
import { parseHtmlFile } from "../email/templates";

export const checkoutAutoRespEmailBody = ({
  firstname,
  price,
  orderId,
  products,
}) => {
  const variable = [
    {
      variable: "FIRST_NAME",
      value: firstname,
    },
    {
      variable: "ORDER_ID",
      value: orderId,
    },
    {
      variable: "PRICE",
      value: price,
    },
    {
      variable: "FOS_EMAIL",
      value: process.env.FOS_SALES_MAIL,
    },
    {
      variable: "PRODUCTS",
      value: products,
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
  orderId,
  products,
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
      variable: "ORDER_ID",
      value: orderId,
    },
    {
      variable: "PRICE",
      value: price,
    },
    {
      variable: "PRODUCTS",
      value: products,
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
