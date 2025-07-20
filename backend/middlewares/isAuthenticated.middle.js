import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    // console.log("token inside of isAuthenticated middleware: ", token);
    const decoded = jwt.verify(token, process.env.SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    console.log("error inside of auth middleware: ", error);
    return res.status(401).json({
      message: "Please login first!",
      success: false,
    });
  }
};
