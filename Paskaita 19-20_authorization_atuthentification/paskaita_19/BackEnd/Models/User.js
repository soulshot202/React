import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
  },

  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model("User", userSchema);
