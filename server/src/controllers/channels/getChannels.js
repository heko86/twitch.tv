import User from "../../models/User.js";

export const getChannels = async (_, res) => {
  try {
    const users = await User.find(
      {},
      {
        channel: 1,
        username: 1,
      }
    ).populate("channel");

    const channel = users
      .filter((u) => u.channel.isActive)
      .map((user) => {
        return {
          id: user.channel._id,
          title: user.channel.title,
          avatarUrl: user.channel.avatarUrl,
          username: user.username,
          isOnline: false,
        };
      });

    return res.json({ channel });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went worng");
  }
};
