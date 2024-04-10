import mongoose from "mongoose";
const productsChema = mongoose.Schema(
  {
    name: String,
    image: String,
    price: Number,
  },
  {
    timestamps: true,
  }
);
const productModel = mongoose.model("products", productsChema);
export default productModel;
