import express from "express";
import Joi from "joi";
import { verifyToken } from "../controllers/middlewares/auth.js";
import {
  getChannelSettings,
  putChannelSettings,
} from "../controllers/controllers.js";
import ExpressValidation from "express-joi-validation";

const router = express.Router();

const validator = ExpressValidation.createValidator({});

const channelSettingsSchema = Joi.object({
  username: Joi.string().min(3).max(12).required(),
  description: Joi.string().min(10).max(200).required(),
  title: Joi.string().min(3).max(30).required(),
  avatarUrl: Joi.string().uri().required(),
});

router.get("/channel", verifyToken, getChannelSettings);
router.put(
  "/channel",
  verifyToken,
  validator.body(channelSettingsSchema),
  putChannelSettings
);

export default router;
