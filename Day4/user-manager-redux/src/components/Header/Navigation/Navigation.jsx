import { NavigationItem } from "./NavigationItem";

import "./Navigation.css";

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
  return (
    <nav>
      {paths.map((path) => (
        <NavigationItem key={path.id} link={path.path} label={path.label} />
      ))}
    </nav>
  );
};
