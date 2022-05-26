import { NavigationItem } from "./NavigationItem";

import "./Navigation.css";
import { useContext } from "react";
import { AppContext } from "../../../App";

export const paths = [
  {
    id: "home",
    path: "/",
    label: "HOME",
  },
  {
    id: "about",
    path: "/about",
    label: "ABOUT",
  },
  {
    id: "contact",
    path: "/contact",
    label: "CONTACT",
  },
];

export const Navigation = () => {
  const { currentPage, setCurrentPage } = useContext(AppContext);

  return (
    <nav>
      {paths.map((path, index) => (
        <NavigationItem
          key={path.id}
          id={path.id}
          setCurrentPage={setCurrentPage}
          link={path.path}
          label={path.label}
          active={currentPage === path.id}
        />
      ))}
    </nav>
  );
};
