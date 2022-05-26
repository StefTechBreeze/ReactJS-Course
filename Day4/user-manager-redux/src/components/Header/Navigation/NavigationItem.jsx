import { merge } from "../../../style/utils";

import "./NavigationItem.css";

export const NavigationItem = ({ link, label, active }) => {
  return (
    <a
      className={merge(
        "app-navigation__item",
        active && "app-navigation__item--active"
      )}
      href={link}
    >
      {label}
    </a>
  );
};
