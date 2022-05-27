import { useContext } from "react";
import { AppContext } from "../../../App";
import { merge } from "../../../style/utils";
import { NavLink } from "react-router-dom";

import "./NavigationItem.css";

export const NavigationItem = ({ link, label }) => {
  const { darkTheme } = useContext(AppContext);

  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? merge(
              "app-navigation__item",
              "app-navigation__item--active",
              darkTheme && "app-navigation__item--dark-theme"
            )
          : merge(
              "app-navigation__item",
              darkTheme && "app-navigation__item--dark-theme"
            )
      }
      to={link}
    >
      {label}
    </NavLink>
  );
};
