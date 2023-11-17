import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./router.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(router);

const mongoURL = process.env.MONGO_URL;
const PORT = process.env.PORT;

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
