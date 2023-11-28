import Shoe from "../models/Shoe.js";
export const getShoes = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 0;
    const data = await Shoe.find().limit(limit);
    res.json(data);
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
