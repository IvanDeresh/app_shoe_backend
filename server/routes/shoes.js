import express from "express";
import { getShoes } from "../controllers/shoe.js";
import { verifyToken } from "../middleware/index.js";

const router = express.Router();

/* READ */
router.get("/api/data", getShoes);

export default router;
