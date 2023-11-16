import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 32,
  },
  email: {
    type: String,
    required: true,
    max: 100,
    min: 6,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    max: 30,
    min: 6,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
