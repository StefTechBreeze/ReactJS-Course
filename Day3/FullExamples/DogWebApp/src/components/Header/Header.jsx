import React from "react";

import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src="/assets/svg/logo.svg" />
      <p className="header__title">Dog Web App</p>
    </div>
  );
};
