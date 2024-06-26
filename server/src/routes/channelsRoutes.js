import express from "express";
import Joi from "joi";
import ExpressValidation from "express-joi-validation";
import {
  getChannelDetails,
  getChannels,
  postFollowChannel,
  getFollowedChannels,
  postGiftItem,
} from "../controllers/controllers.js";
import { verifyToken } from "../controllers/middlewares/auth.js";

const router = express.Router();

const channelDetailsSchema = Joi.object({
  channelId: Joi.string().required(),
  searchFlag: Joi.boolean(),
});

const giftSchema = Joi.object({
  itemId: Joi.string().required(),
});

const validator = ExpressValidation.createValidator({});

router.get("/followed", verifyToken, getFollowedChannels);

router.post(
  "/follow",
  verifyToken,
  validator.body(channelDetailsSchema),
  postFollowChannel
);

router.get(
  "/:channelId",
  validator.params(channelDetailsSchema),
  getChannelDetails
);

router.post("/gift", verifyToken, validator.body(giftSchema), postGiftItem);

router.get("/", getChannels);
export default router;
