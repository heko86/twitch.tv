import React, { useEffect, useState } from "react";
import { useFollowChannel, useUserDetails } from "../../../shared/hooks";

const FollowButton = ({ channelId, getChannels }) => {
  const [isFollow, setIsFollow] = useState(null);
  const { followChannel } = useFollowChannel();

  useEffect(() => {
    (async () => {
      const followInfo = await followChannel(channelId, getChannels, true);
      setIsFollow(followInfo.followStatus);
    })();
  }, []);

  const handleFollowChannel = async () => {
    const isFollowFlag = await followChannel(channelId, getChannels, false);
    setIsFollow(isFollowFlag.isFollow);
  };
  return (
    <button onClick={handleFollowChannel} className="channel-follow-button">
      {isFollow === null ? "" : isFollow ? "フォロー中" : "フォローする"}
    </button>
  );
};

export const ChannelDescription = ({
  username,
  title,
  description,
  channelId,
  getChannels,
  isFollow,
}) => {
  const { isLogged } = useUserDetails();
  return (
    <div className="channel-description-container">
      <span className="channel-description-title">
        {username}
        <span>
          {isLogged && (
            <FollowButton
              className="channel-follow-button"
              channelId={channelId}
              getChannels={getChannels}
              isFollow={isFollow}
            />
          )}
        </span>
      </span>

      <span className="channel-description-subtitle">{title}</span>
      <div className="channel-description-box">
        <span className="channel-description">{description}</span>
      </div>
    </div>
  );
};
