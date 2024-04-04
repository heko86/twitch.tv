import React from "react";
import { Chat } from "./Chat";
import { ChannelDescription } from "./ChannelDescription";

const channelDetails = {
  id: 1,
  username: "Gamer",
  title: "Gaming Channel",
  description: "Playing some RPG",
  isOnline: false,
};

export const ChannelView = () => {
  return (
    <div className="channel-container">
      <div className="channel-video-description-section">
        <div className="channel-offline-placeholder">
          <span>Channel is Offline</span>
        </div>
        <ChannelDescription
          id={1}
          username={channelDetails.username}
          title={channelDetails.title}
          description={channelDetails.description}
          isOnline={false}
        />
      </div>
      <Chat />
    </div>
  );
};
