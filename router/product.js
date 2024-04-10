import express from "express";
import {
  AddProduct,
  DeleteProduct,
  UploadProduct,
  getAllProduct,
  getProductByID,
} from "../controllers/product.js";
const router = express.Router();
router.get("/products", getAllProduct);
router.get("/products/:id", getProductByID);
router.post("/products", AddProduct);
router.put("/products/:id", UploadProduct);
router.delete("/products/:id", DeleteProduct);
export default router;
