import mongoose from "mongoose";

export const db = async () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/quizeApp")
    .then(() => console.log("Connected to the db!"))
    .catch((err) => console.log("Connection failed!: ", err));
};
