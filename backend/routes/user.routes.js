import express from "express";
import {
  forgetPasswordController,
  loginController,
  logoutController,
  profileController,
  registerUserController,
  resetPasswordController,
  verificationController,
} from "../controllers/auth.controller.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.middle.js";

const authRouter = express.Router();

authRouter.post("/register", registerUserController);
authRouter.get("/verify/:token", verificationController);
authRouter.post("/login", loginController);
authRouter.get("/logout", isAuthenticated, logoutController);
authRouter.get("/profile", isAuthenticated, profileController);
authRouter.post("/forget-password", isAuthenticated, forgetPasswordController);
authRouter.put(
  "/reset-password/:token",
  isAuthenticated,
  resetPasswordController
);

export default authRouter;
