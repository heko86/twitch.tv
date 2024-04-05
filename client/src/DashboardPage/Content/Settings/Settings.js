import React from "react";
import { StreamKey } from "./StreamKey";
import { ChannelSettings } from "./ChannelSettings";
import { PasswordSettings } from "./PasswordSettings";

const chanelSettings = {
  title: "title",
  description: "description",
  avatarUrl: "none",
  username: "miya",
  streamKey: "1234",
};

export const Settings = () => {
  return (
    <div className="settings-container">
      <spna>Settings</spna>
      <ChannelSettings settings={chanelSettings} />
      <PasswordSettings />
      <StreamKey streamKey={chanelSettings.streamKey} />
    </div>
  );
};
