import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes.js";

dotenv.config();

const PORT = process.env.PORT || 3001;
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
