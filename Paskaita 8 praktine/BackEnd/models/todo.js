import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

export default mongoose.model("Todo", todoSchema);
