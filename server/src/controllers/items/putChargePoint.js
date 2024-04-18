import User from "../../models/User.js";

export const putChargePoint = async (req, res) => {
  try {
    const { userId } = req.user;

    const { point } = req.body;

    const userPoint = await User.findById(userId, { point: 1 });

    const chargedPint = (userPoint.point += point);

    await User.updateOne({ point: chargedPint });

    return res.status(200);
  } catch (e) {
    console.log(e);
    return res.status(500).send("Something went wrong");
  }
};
