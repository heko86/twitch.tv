import User from "../../models/User.js";
import { v4 as uuid } from "uuid";

export const putPurchaseItem = async (req, res) => {
  try {
    const { userId } = req.user;

    const { point, itemName } = req.body;

    let userData = await User.findById(userId, { point: 1, items: 1 });

    if (!userData.point) {
      userData.point = 0;
    }

    if (userData.point < point) {
      return res.status(400).send("ポイントが足りません。");
    }

    const uniqueId = uuid();

    userData.point = userData.point -= point;

    const itemsInfo = {
      itemId: uniqueId,
      itemName: itemName,
    };

    userData.items.push(itemsInfo);
    await userData.save();

    await User.updateOne({ _id: userId }, { point: userData.point });

    return res.status(200).send("successfully");
  } catch (e) {
    console.log(e);
    return res.status(500).send("Something went wrong");
  }
};
