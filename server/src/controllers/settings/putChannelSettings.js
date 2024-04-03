import Channel from "../../models/Channel.js";
import User from "../../models/User.js";

export const putChannelSettings = async (req, res) => {
  try {
    const { userId } = req.user;

    const { username, title, description, avatarUrl } = req.body;

    const userData = await User.findById(userId, { username: 1, channel: 1 });

    if (userData.username !== username) {
      await User.updateOne({ _id: userId }, { username });
    }

    const channelData = await Channel.findByIdAndUpdate(
      userData.channel,
      {
        title,
        description,
        avatarUrl,
        isActive: true,
      },
      { new: true }
    );

    return res.status(200).json({
      channeId: channelData._id,
      title: channelData.title,
      username,
      description: channelData.description,
      avatarUrl: channelData.avatarUrl,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send("Sothing went wrong");
  }
};
