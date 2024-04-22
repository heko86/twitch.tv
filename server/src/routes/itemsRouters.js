import express from "express";
import Joi from "joi";
import { verifyToken } from "../controllers/middlewares/auth.js";
import ExpressValidation from "express-joi-validation";
import { getPoints, putChargePoint } from "../controllers/controllers.js";

const router = express.Router();

const validator = ExpressValidation.createValidator({});

const chargePointSchema = Joi.object({
  point: Joi.number().required(),
});

router.put(
  "/point",
  verifyToken,
  validator.body(chargePointSchema),
  putChargePoint
);

router.get("/points", verifyToken, getPoints);

export default router;
