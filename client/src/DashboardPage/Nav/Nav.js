import React from "react";
import logo from "../../resources/images/logoPlaceholder.svg";
import { useNavigate } from "react-router-dom";
import { TemporaryDrawer } from "./TemporaryDrawer";

const NavLogo = () => {
  return (
    <div className="nav-logo-container">
      <img className="nav-logo" width="100%" height="100%" src={logo} />
    </div>
  );
};

const NavButton = ({ text, onClickHandler }) => {
  return (
    <span className="nav-button" onClick={onClickHandler}>
      {text}
    </span>
  );
};

export const Nav = () => {
  const navigate = useNavigate();

  const handleNavigateToAuth = () => {
    navigate("/auth");
  };

  const handleNavigateToChannels = () => {
    navigate("/channels");
  };

  return (
    <div className="nav-container">
      <NavLogo />
      <div className="nav-buttons-container">
        <NavButton text="一覧" onClickHandler={handleNavigateToChannels} />
        <div>
          <NavButton text={<TemporaryDrawer />} />
        </div>
      </div>
    </div>
  );
};
