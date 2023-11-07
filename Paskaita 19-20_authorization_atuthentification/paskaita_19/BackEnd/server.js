import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./router.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
