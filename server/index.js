import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Shoe from "./models/Shoe.js";
import cors from "cors";
const app = express();
const PORT = 3002;

mongoose.connect("mongodb://localhost:27017/shoeshop", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(cors());
app.use(bodyParser.json());
app.get("/api/data", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 0;
    const data = await Shoe.find().limit(limit);
    res.json(data);
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
