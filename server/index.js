import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { loginController, registerController } from "./controllers/auth.js";
import { getShoes } from "./controllers/shoe.js";
import cors from "cors";
const app = express();
const PORT = 3001;

mongoose.connect("mongodb://localhost:27017/shoeshop");
app.use(bodyParser.json());
app.use(cors());
app.get("/shoes", getShoes);
app.post("/auth/login", loginController);
app.post("/auth/register", registerController);

app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}`);
});
