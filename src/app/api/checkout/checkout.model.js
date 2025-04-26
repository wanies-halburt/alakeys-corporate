import mongoose from "mongoose";
import Counter from "../counter/counter.model";

const CheckoutSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      unique: true,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "clients",
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    message: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
          required: true,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: ["bank-transfer", "card"],
      default: "bank-transfer",
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },
    checkoutAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
CheckoutSchema.pre("validate", async function (next) {
  if (this.isNew && !this.orderId) {
    const counter = await Counter.findOneAndUpdate(
      { id: "orderId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );

    this.orderId = `ORD${counter.seq}`; // No need to add 10000 manually anymore
  }

  next();
});

const Checkout =
  mongoose.models.checkout || mongoose.model("checkout", CheckoutSchema);

export default Checkout;
