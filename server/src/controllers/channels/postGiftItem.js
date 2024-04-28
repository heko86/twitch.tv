import User from "../../models/User.js";

export const postGiftItem = async (req, res) => {
  try {
    const { userId } = req.user;
    const { itemId } = req.body;
    const userData = await User.findById(userId, { items: 1 });
    const result = userData.items.filter((item) => item.itemId !== itemId);
    await User.updateOne({ _id: userId }, { items: result });
    return res.status(200).send("success");
  } catch (e) {
    console.log(e);
    return res.status(500).send("Something went wrong. Please try again");
  }
};
