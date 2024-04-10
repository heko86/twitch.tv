import { useEffect } from "react";
import { getChatHisotry, sendChatMessage } from "../../socketConn";
import { useUserDetails } from "./useUserDetails";

export const useChatHistory = (channelId) => {
  const { isLogged, username } = useUserDetails();

  useEffect(() => {
    getChatHisotry(channelId);
  }, []);

  const sendMessage = (message) => {
    sendChatMessage(channelId, {
      author: isLogged ? username : "Guest",
      content: message,
    });
  };

  return {
    message: [],
    sendMessage,
  };
};
