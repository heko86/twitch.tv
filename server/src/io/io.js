import { Server } from "socket.io";
import { emitChatHistory } from "./event/chatHistory.js";

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
  });
};
