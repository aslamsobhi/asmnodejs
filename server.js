import express from "express";
import mongoose from "mongoose";
import router from "./router/product.js";
import authRouter from "./router/auth.js";
const app = express();

app.use(express.json());
app.use("/api", router);
app.use("/api", authRouter);
const connectDB = async () => {
  try {
    mongoose.connect(`mongodb://localhost:27017/productshop`);
    console.log("ket noi thanh cong");
  } catch (error) {
    console.log("ket noi khong thanh cong");
  }
};
app.listen(4000, () => {
  connectDB();
  console.log(`Endpoint http://localhost:4000`);
});
