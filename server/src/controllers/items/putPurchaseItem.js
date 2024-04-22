import User from "../../models/User.js";

export const putPurchaseItem = async (req, res) => {
  try {
    const { userId } = req.user;

    const { point } = req.body;

    let userPoint = await User.findById(userId, { point: 1 });

    if (!userPoint.point) {
      userPoint.point = 0;
    }

    if (userPoint.point < point) {
      return res.status(400).send("ポイントが足りません。");
    }
    userPoint.point = userPoint.point -= point;

    await User.updateOne({ _id: userId }, { point: userPoint.point });

    return res.status(200).send("successfully");
  } catch (e) {
    console.log(e);
    return res.status(500).send("Something went wrong");
  }
};