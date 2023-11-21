import express from "express";
import {
  addNewProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "./controlers.js";

const router = express.Router();

router.get("/products", getProducts);
router.post("/products", addNewProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);
router.get("/products/:id", getProduct);
export default router;
