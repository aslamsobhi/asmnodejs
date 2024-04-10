import productModel from "../models/product.js";

export const getAllProduct = async (req, res) => {
  try {
    const products = await productModel.find();
    return res.status(200).json({ status: true, data: products });
  } catch (error) {
    return res.status(503).json({ status: false, message: "loi request" });
  }
};
export const getProductByID = async (req, res) => {
  try {
    const id = req.params.id;
    const products = await productModel.find({ _id: id });
    return res.status(200).json({ status: true, data: products });
  } catch (error) {
    return res.status(503).json({ status: false, message: "loi request" });
  }
};
export const AddProduct = async (req, res) => {
  try {
    const body = req.body;
    const productmodel = new productModel(body);
    const products = await productmodel.save();
    return res.status(200).json({ status: true, data: products });
  } catch (error) {
    return res.status(503).json({ status: false, message: "loi request" });
  }
};
export const UploadProduct = async (req, res) => {
  try {
    const body = req.body;
    const id = req.params.id;
    const product = await productModel.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });
    return res
      .status(200)
      .json({ status: true, data: product, message: "sua thanh cong" });
  } catch (error) {
    return res.status(503).json({ status: false, message: "loi request" });
  }
};
export const DeleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productModel.findOneAndDelete({ _id: id });
    return res
      .status(200)
      .json({ status: true, data: product, message: "xoa thanh cong" });
  } catch (error) {
    return res.status(503).json({ status: false, message: "loi request" });
  }
};
