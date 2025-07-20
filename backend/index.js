import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/user.routes.js";
import { db } from "./utils/db.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const port = process.env.PORT;

app.get("/", (res, req) => {
  res.send("App is running fine");
});

app.use("/auth", authRouter);

db();

app.listen(port, () => {
  console.log("App is listening to port: ", port);
});
