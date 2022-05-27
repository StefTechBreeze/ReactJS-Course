import { About } from "../Pages/About/About";
import { Contact } from "../Pages/Contact/Contact";
import { Users } from "../Pages/Users/Users";
import { Routes, Route } from "react-router-dom";

import "./Main.css";

export const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/*" element={<p>no found</p>} />
      </Routes>
    </main>
  );
};
