import { useContext } from "react";
import { AppContext } from "../../../App";
import { merge } from "../../../style/utils";

import "./NavigationItem.css";

export const NavigationItem = ({ id, setCurrentPage, link, label, active }) => {
  const { darkTheme } = useContext(AppContext);

  return (
    <a
      className={merge(
        "app-navigation__item",
        active && "app-navigation__item--active",
        darkTheme && "app-navigation__item--dark-theme"
      )}
      href={link}
      onClick={(event) => {
        event.preventDefault();
        setCurrentPage(id);
      }}
    >
      {label}
    </a>
  );
};
