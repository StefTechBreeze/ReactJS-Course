import { NavigationItem } from "./NavigationItem";

import "./Navigation.css";

export const paths = [
  {
    id: 1,
    path: "/",
    label: "HOME",
  },
  {
    id: 2,
    path: "/about",
    label: "ABOUT",
  },
  {
    id: 3,
    path: "/contact",
    label: "CONTACT",
  },
];

export const Navigation = () => {
  return (
    <nav>
      {paths.map((path, index) => (
        <NavigationItem
          key={path.id}
          link={path.path}
          label={path.label}
          active={index === 0}
        />
      ))}
    </nav>
  );
};
