import { useEffect } from "react";
import { getChatHisotry } from "../../socketConn";

export const useChatHistory = (channelId) => {
  useEffect(() => {
    getChatHisotry(channelId);
  }, []);

  return {
    message: [],
    sendMessage: () => {},
  };
};
