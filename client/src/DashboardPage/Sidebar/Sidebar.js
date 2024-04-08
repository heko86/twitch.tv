import React from "react";

const FollowedChannels = [
  {
    id: 1,
    username: "miya",
    isOnline: false,
  },
  {
    id: 2,
    username: "hoge",
    isOnline: true,
  },
  {
    id: 3,
    username: "huga",
    isOnline: true,
  },
];

export const Sidebar = ({ channels }) => {
  if (!channels) {
    return null;
  }

  return (
    <div className="sidebar-container">
      <span className="sidebar-title">For you</span>
      <span className="sidebar-subtitle">FOLLOWED CHANNEL</span>
      {channels?.map((channel) => {
        return (
          <div key={channel.id} className="sidebar-list-item">
            <span className="sidebar-list-username">{channel.username}</span>
            <span
              className="sidebar-list-status"
              style={{ color: channel.isOnline ? "green" : "red" }}
            >
              {channel.isOnline ? "OnLine" : "Offline"}
            </span>
          </div>
        );
      })}
    </div>
  );
};
