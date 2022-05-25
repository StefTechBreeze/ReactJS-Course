import React from "react";
import { Header } from "./components/Header/Header";
import { Content } from "./components/Content/Content";

import "./App.css";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Content />
    </div>
  );
};
