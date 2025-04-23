import mongoose from "mongoose";

const ContactUsSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: [true, "Please provide a name"],
      // unique: true,
    },
    projectName: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      // unique: true,
    },
    message: {
      type: String,
      required: [true, "Please provide a message"],
    },
  },
  { timestamps: true }
);
const ContactUsModel =
  mongoose.models.contactus || mongoose.model("contactus", ContactUsSchema);

export default ContactUsModel;
