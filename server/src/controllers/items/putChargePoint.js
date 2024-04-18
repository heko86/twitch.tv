import User from "../../models/User.js";

export const putChargePoint = async (req, res) => {
  try {
    const { userId } = req.user;

    const { point } = req.body;

    const userPoint = await User.findById(userId, { point: 1 });

    const chargedPoint = (userPoint.point += point);

    await User.updateOne({ point: chargedPoint });

    return res.status(200).send("successfully");
  } catch (e) {
    console.log(e);
    return res.status(500).send("Something went wrong");
  }
};
