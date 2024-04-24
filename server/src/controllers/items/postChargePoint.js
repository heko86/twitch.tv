import User from "../../models/User.js";

export const postChargePoint = async (req, res) => {
  try {
    const { userId } = req.user;

    const { point } = req.body;

    let userData = await User.findById(userId, { point: 1 });

    userData.point = userData.point += point;
    await User.updateOne({ _id: userId }, { point: userData.point });

    return res.status(200).send("successfully");
  } catch (e) {
    console.log(e);
    return res.status(500).send("Something went wrong");
  }
};
