import React from "react";
import { Content } from "./components/Content/Content";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

export const App = () => {
  return (
    <div id="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};
