import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { DashboardPage } from "./DashboardPage";
import { AuthPage } from "./AuthPage";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App>
      <Routes>
        <Route path="/*" element={<DashboardPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </App>
  </BrowserRouter>
);
