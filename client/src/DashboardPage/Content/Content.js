import React from "react";
import { Routes, Route } from "react-router-dom";
import { Channels } from "./Channels";
import { ChannelView } from "./ChannelView";
import { Settings } from "./Settings";
import { Items } from "./Items";
import { MyPage } from "./MyPage";

export const Content = ({ channels, getChannels }) => {
  return (
    <div className="content-container">
      <Routes>
        <Route path="settings" element={<Settings />} />
        <Route path="channels" element={<Channels channels={channels} />} />
        <Route
          path="channel/:id"
          element={<ChannelView getChannels={getChannels} />}
        />
        <Route path="items" element={<Items />} />
        <Route path="mypage" element={<MyPage />} />
      </Routes>
    </div>
  );
};
