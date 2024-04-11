import { useEffect } from "react";
import { getChatHisotry, sendChatMessage } from "../../socketConn";
import { useUserDetails } from "./useUserDetails";
import { closeChatSubscription } from "../../socketConn/socketConn";
import { useStore } from "../../store/store";

export const useChatHistory = (channelId) => {
  const { chatHistory } = useStore();
  const { isLogged, username } = useUserDetails();

  useEffect(() => {
    getChatHisotry(channelId);
    return () => {
      closeChatSubscription(channelId);
    };
  }, []);

  const sendMessage = (message) => {
    sendChatMessage(channelId, {
      author: isLogged ? username : "Guest",
      content: message,
    });
  };

  return {
    message: chatHistory.channelId === channelId ? chatHistory.messages : [],
    sendMessage,
  };
};
