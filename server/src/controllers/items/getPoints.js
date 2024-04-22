import User from "../../models/User.js";

export const getPoints = async (req, res) => {
  try {
    const { userId } = req.user;

    const userPoints = await User.findById(userId, { point: 1 });

    return res.status(200).json({ userPoints });
  } catch (e) {
    console.log(e);
    return res.status(500).send("Something went wrong");
  }
};
