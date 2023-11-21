import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 100,
  },
  price: {
    type: Number,
    required: true,
    min: 0.01,
  },
  description: {
    type: String,
    default: "---",

    minLength: 3,
    maxLength: 1000,
  },
  expirationDate: {
    type: Date,
    default: "2025-01-01",
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
  },
});

export default mongoose.model("Product", productSchema);
