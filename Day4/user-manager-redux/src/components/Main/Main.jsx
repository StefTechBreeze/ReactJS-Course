import { useContext } from "react";
import { AppContext } from "../../App";
import { About } from "../Pages/About/About";
import { Contact } from "../Pages/Contact/Contact";
import { Users } from "../Pages/Users/Users";
import "./Main.css";

const renderPage = (currentPage) => {
  switch (currentPage) {
    case "home":
      return <Users />;
    case "about":
      return <About />;
    case "contact":
      return <Contact />;
    default:
      return null;
  }
};

export const Main = () => {
  const { currentPage } = useContext(AppContext);

  return <main>{renderPage(currentPage)}</main>;
};
