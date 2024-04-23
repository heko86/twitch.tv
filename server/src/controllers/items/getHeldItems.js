import User from "../../models/User.js";

export const getHeldItems = async (req, res) => {
  try {
    const { userId } = req.user;

    const userHeldItems = await User.findById(userId, { items: 1 });

    return res.status(200).json({ userHeldItems });
  } catch (e) {
    console.log(e);
    return res.status(500).send("Something went wrong");
  }
};
