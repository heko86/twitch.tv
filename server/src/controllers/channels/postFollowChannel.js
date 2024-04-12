import User from "../../models/User.js";

export const postFollowChannel = async (req, res) => {
  try {
    const { userId } = req.user;
    const { channelId, searchFlag } = req.body;

    const userData = await User.findById(userId, { followedChannels: 1 });
    const index = userData.followedChannels.indexOf(channelId);

    if (index === -1) {
      if (!searchFlag) {
        userData.followedChannels.push(channelId);
        await userData.save();
      }
      return res.status(200).send({ isFollow: true, followStatus: false });
    } else {
      if (!searchFlag) {
        userData.followedChannels.splice(index, 1);
        await userData.save();
      }
      return res.status(200).send({ isFollow: false, followStatus: true });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).send("Something went wrong. Please try again");
  }
};
