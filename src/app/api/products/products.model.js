import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title"],
    },
    category: {
      type: String,
      required: [true, "Please provide a category"],
    },
    tag: {
      type: String,
      required: [true, "Please provide a tag"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description"],
    },
    img: {
      type: String,
      required: [true, "Please provide an image"],
    },
    price: {
      type: String,
      required: [true, "Please provide a price"],
    },
    sold_to: [
      {
        client: { type: mongoose.Schema.Types.ObjectId, ref: "clients" },
        purchasedAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

const Product =
  mongoose.models.products || mongoose.model("products", ProductSchema);

export default Product;
