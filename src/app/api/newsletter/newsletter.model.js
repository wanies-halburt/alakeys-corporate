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
  mongoose.models.newsletter ||
  mongoose.model("newsletter", SubscribeNewsletterSchema);

export default SubscribeNewsletterModel;
