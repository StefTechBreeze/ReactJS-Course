import { Navigation } from "./Navigation/Navigation";

import { useContext } from "react";
import { AppContext } from "../../App";

import "./Header.css";

export const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(AppContext);

  return (
    <header>
      <img alt="" className="header__logo" src="/svg/user-white.svg" />
      <Navigation />
      <p className="header__app-title">USER MANAGER</p>
      <button
        onClick={() => {
          setDarkTheme(!darkTheme);
        }}
      >
        Toggle Theme
      </button>
    </header>
  );
};
