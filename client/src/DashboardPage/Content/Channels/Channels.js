import React from "react";
import { ChannelCard } from "./ChannelCard";

const dummyChannel = [
  {
    id: 1,
    title: "test1",
    username: "miya",
    avatarUrl: null,
    isOnline: false,
  },
  {
    id: 2,
    title: "test2",
    username: "hoge",
    avatarUrl: null,
    isOnline: false,
  },
  {
    id: 3,
    title: "test3",
    username: "fuga",
    avatarUrl: null,
    isOnline: true,
  },
  {
    id: 4,
    title: "test4",
    username: "miya2",
    avatarUrl: null,
    isOnline: true,
  },
];

export const Channels = ({ channels }) => {
  return (
    <div className="channels-container">
      {channels.map((c) => (
        <ChannelCard
          key={c.id}
          id={c.id}
          title={c.title}
          username={c.username}
          avatarUrl={c.avatarUrl}
          isOnline={c.isOnline}
          //   navigateToChannelHandler={}
        />
      ))}
    </div>
  );
};
