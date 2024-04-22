import express from "express";
import Joi from "joi";
import { verifyToken } from "../controllers/middlewares/auth.js";
import ExpressValidation from "express-joi-validation";
import { getPoints, putPurchaseItem } from "../controllers/controllers.js";

const router = express.Router();

const validator = ExpressValidation.createValidator({});

const purchaseItemSchema = Joi.object({
  point: Joi.number().required(),
});

router.put(
  "/purchase",
  verifyToken,
  validator.body(purchaseItemSchema),
  putPurchaseItem
);

router.get("/points", verifyToken, getPoints);

export default router;
