import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router.js";
import mongoose from "mongoose";

dotenv.config();

const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URL;

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
