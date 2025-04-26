// models/Counter.js
import mongoose from "mongoose";

const counterSchema = new mongoose.Schema({
  id: { type: String, required: true }, // example: 'orderId'
  seq: { type: Number, default: 10000 }, // starting from 10000
});

const Counter =
  mongoose.models.counter || mongoose.model("counter", counterSchema);
export default Counter;
