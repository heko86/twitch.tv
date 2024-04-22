import React from "react";
import { useNavigate } from "react-router-dom";

export const Sidebar = ({ channels, getChannels }) => {
  const navigate = useNavigate();
  if (!channels) {
    return null;
  }

  const handleChannelClick = (channel) => {
    console.log(channel);
    navigate(`/channel/${channel.id}`);
    window.location.reload();
  };

  return (
    <div className="sidebar-container">
      <span className="sidebar-title">For you</span>
      <span className="sidebar-subtitle">フォロー済みのチャンネル</span>
      {channels?.map((channel) => {
        return (
          <div
            key={channel.id}
            className="sidebar-list-item"
            onClick={() => {
              handleChannelClick(channel);
            }}
          >
            <span className="sidebar-list-username">{channel.username}</span>
            <span
              className="sidebar-list-status"
              style={{ color: channel.isOnline ? "green" : "red" }}
            >
              {channel.isOnline ? "オンライン" : "オフライン"}
            </span>
          </div>
        );
      })}
    </div>
  );
};
