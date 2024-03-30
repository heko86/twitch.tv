import React from "react";
import logoPlaceholder from "../resources/images/logoPlaceholder.svg";

export function Logo({ text }) {
  return (
    <div className=".auth-form-logo-container">
      <img src={logoPlaceholder} />
      <span>&nbsp;&nbsp;{text}</span>
    </div>
  );
}