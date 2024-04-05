import React from "react";
import { StreamKey } from "./StreamKey";
import { ChannelSettings } from "./ChannelSettings";
import { PasswordSettings } from "./PasswordSettings";
import { useChannelSettings } from "../../../shared/hooks";

export const Settings = () => {
  const { chanelSettings } = useChannelSettings();

  if (!chanelSettings) {
    return <span>Fetching the data</span>;
  }
  return (
    <div className="settings-container">
      <spna>Settings</spna>
      <ChannelSettings settings={chanelSettings} />
      <PasswordSettings />
      <StreamKey streamKey={chanelSettings.streamKey} />
    </div>
  );
};
