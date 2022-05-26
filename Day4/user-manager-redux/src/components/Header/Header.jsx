import { Navigation } from "./Navigation/Navigation";

import "./Header.css";

export const Header = () => {
  return (
    <header>
      <img alt="" className="header__logo" src="/svg/user-white.svg" />
      <Navigation />
      <p className="header__app-title">USER MANAGER</p>
    </header>
  );
};
