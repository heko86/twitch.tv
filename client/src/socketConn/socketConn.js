import { io } from "socket.io-client";
let socket;

export const connectWithSocketServer = () => {
  socket = io("http://localhost:5002");

  socket.on("connect", () => {
    console.log("successfully connected with socket.io server");
    console.log("socket.id : ", socket.id);
  });

  socket.on("chat-history", (chatHistory) => {
    console.log(chatHistory);
    console.log("chat-history-came-from-the-server");
  });
};

export const getChatHisotry = (channelId) => {
  socket.emit("chat-histroy", channelId);
};
