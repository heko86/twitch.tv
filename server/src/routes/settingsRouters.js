import express from "express";
import { verifyToken } from "../controllers/middlewares/auth.js";
import { getChannelSettings } from "../controllers/controllers.js";

const router = express.Router();

router.get("/channel", verifyToken, getChannelSettings);

export default router;
