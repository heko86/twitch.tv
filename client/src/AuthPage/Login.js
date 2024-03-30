import React from "react";
import { Logo } from "./Logo";

export const Login = ({ switchAuthHandler }) => {
  return (
    <div className="login-container">
      <Logo text={"Log in to Clone"} />
      <form className="auth-form">Form</form>
      <span onClick={switchAuthHandler} className="auth-form-switch-label">
        Don't have an account ? Sign up
      </span>
    </div>
  );
};
