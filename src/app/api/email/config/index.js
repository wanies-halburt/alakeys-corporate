import nodemailer from "nodemailer";

export const IS_ADMIN_CONFIG = !!process.env.IS_ADMIN;

// export const NODE_MAILDER_CONFIG_OPTIONS_ADMIN = {
//   host: process.env.FOS_SEND_MAIL_HOST,
//   port: process.env.FOS_SEND_MAIL_PORT,
//   secure: true, // use TLS
//   auth: {
//     user: process.env.FOS_SEND_MAIL_FROM,
//     pass: process.env.FOS_SEND_MAIL_PASS,
//   },
//   tls: {
//     rejectUnauthorized: true,
//     minVersion: "TLSv1.2",
//   },
//   dkim: {
//     domainName: process.env.FOS_DOMAIN_NAME,
//     keySelector: "2023",
//     privateKey: process.env.FOS_DKIM_PRIVATE_KEY,
//   },
//   logger: true,
//   debugger: process.env.NODE_ENV !== "production",
// };

export const NODE_MAILDER_CONFIG_OPTIONS = {
  name: "hostgator",
  host: "my.hostgator.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.FOS_SEND_MAIL_FROM,
    pass: process.env.FOS_SEND_MAIL_PASS,
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
};

export const MAILDRIP_CONFIG = {
  baseUri: process.env.MD_API_BASE_URI,
  headers: {
    "api-key": process.env.MD_API_KEY,
    "Content-Type": "application/json",
  },
  contactUsGroupId: process.env.MD_CONTACTUS_CONTACT_GROUP_ID,
  submitMusicGroupId: process.env.MD_SUBMIT_MUSIC_CONTACT_GROUP_ID,
  registerGroupId: process.env.MD_REGISTER_GROUP_ID,
  bookAstandGroupId: process.env.MD_BOOK_A_STAND_CONTACT_GROUP_ID,
  subscribeNewsletterGroupId: process.env.MD_SUBSCRIBE_NEWSLETTER_GROUP_ID,
};
