import Channel from "../../models/Channel.js";

export const emitChatHistory = async (socket, channelId) => {
  try {
    const channel = await Channel.findById(channelId).populate("messages");

    if (channel) {
      return socket.emit("chat-history", {
        channelId: channel.id,
        messages: channel.messages.map((m) => ({
          author: m.author,
          content: m.content,
        })),
      });
    }

    console.log(channelId);
    socket.emit("chat-history", {
      errorOccurred: true,
    });
  } catch (err) {
    console.log(err);
    socket.emit("chat-history", {
      errorOccurred: true,
    });
  }
};
