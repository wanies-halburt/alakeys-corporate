import mongoose from "mongoose";

const SubscribeNewsletterSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please provide an email"],
    },
  },
  { timestamps: true }
);
const SubscribeNewsletterModel =
  mongoose.models.contact_us ||
  mongoose.model("contact_us", SubscribeNewsletterSchema);

export default SubscribeNewsletterModel;
