import React, { useEffect } from "react";
import { Chat } from "./Chat";
import { ChannelDescription } from "./ChannelDescription";
import { useChannelDetails } from "../../../shared/hooks";
import { useParams } from "react-router-dom";
import { LoadingSpinner } from "../../../shared/component";

export const ChannelView = ({ getChannels }) => {
  const { isFetching, channelDetails, getChannelDetails } = useChannelDetails();

  const { id } = useParams();

  useEffect(() => {
    getChannelDetails(id);
  }, []);

  if (isFetching) {
    return <LoadingSpinner />;
  }
  return (
    <div className="channel-container">
      <div className="channel-video-description-section">
        <div className="channel-offline-placeholder">
          <span>Channel is Offline</span>
        </div>
        <ChannelDescription
          channelId={channelDetails.id}
          username={channelDetails.username}
          title={channelDetails.title}
          description={channelDetails.description}
          isOnline={false}
          getChannels={getChannels}
        />
      </div>
      <Chat />
    </div>
  );
};
