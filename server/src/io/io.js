import { Server } from "socket.io";
import { emitChatHistory, emitChatMessage } from "./event/chatHistory.js";

let io;

export const registerSoketServer = (server) => {
  io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("new user connected");
    console.log(socket.id);

    socket.on("chat-history", (channelId) => {
      emitChatHistory(socket, channelId);
    });

    socket.on("chat-message", (data) => {
      emitChatMessage(io, { toChannel: data.toChannel, message: data.message });
    });
  });
};
