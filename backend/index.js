import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT;
app.get("/", (res, req) => {
  res.send("App is running fine");
});

app.listen(port, () => {
  console.log("App is listening to port: ", port);
});
