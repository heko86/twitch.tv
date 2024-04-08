import React, { useEffect } from "react";
import { Nav } from "./Nav";
import { Sidebar } from "./Sidebar";
import { Content } from "./Content";
import { useChannels, useUserDetails } from "../shared/hooks";
import { LoadingSpinner } from "../shared/component";

import "./dashboardPage.css";

export const DashboardPage = () => {
  const { getChannels, isFetching, allChannels, followedChannels } =
    useChannels();
  const { isLogged } = useUserDetails();

  useEffect(() => {
    getChannels(isLogged);
  }, []);

  if (isFetching) {
    return <LoadingSpinner />;
  }

  return (
    <div className="dashboard-container">
      <Nav />
      <Sidebar channels={followedChannels} />
      <Content channels={allChannels} />
    </div>
  );
};
