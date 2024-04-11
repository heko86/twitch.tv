import React from "react";
import { Messages } from "./Messages";
import { NewMessageInput } from "./NewMessageInput";
import { useChatHistory } from "../../../../shared/hooks";

export const Chat = ({ channelId }) => {
  const { message, sendMessage } = useChatHistory(channelId);

  return (
    <div className="chat-section">
      <div className="chat-title-container">
        <span className="chat-title-text">Stream Chat </span>
      </div>

      <Messages messages={message} />
      <NewMessageInput sendMessage={sendMessage} />
    </div>
  );
};
