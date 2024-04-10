import UserModel from "../models/auth.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const Resgister = async (req, res) => {
  try {
    const body = req.body;
    body.password = await bcrypt.hash(body.password, 10);
    const user = await UserModel.create(body);
    res.send({ user: user, message: "đăng ký thành công" });
  } catch (error) {
    res.send({ message: "đăng ký không thành công" });
  }
};

export const Login = async (req, res) => {
  try {
    const body = req.body;
    const user = await UserModel.findOne({ email: body.email });
    if (user === null) {
      res.send({ message: "không tìm thấy tài khoản" });
    } else {
      const verify = await bcrypt.compare(body.password, user.password);
      if (verify) {
        const token = jwt.sign({ uid: user._id }, "123456");
        res.send({
          status: true,
          message: "đăng nhập thành công",
          token: token,
        });
      } else {
        res.send({ status: false, message: "sai tên đăng nhập hoặc mật khẩu" });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
