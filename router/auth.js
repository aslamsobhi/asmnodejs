import express from "express";
import { Login, Resgister } from "../controllers/auth.js";
const authRouter = express.Router();
authRouter.post("/resgister", Resgister);
authRouter.post("/login", Login);
export default authRouter;
