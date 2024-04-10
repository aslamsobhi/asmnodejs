import mongoose from "mongoose";
const UserChema = mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);
const UserModel = mongoose.model("Users", UserChema);
export default UserModel;
