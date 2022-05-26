import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import "./App.css";
import { Main } from "./components/Main/Main";
import { EditUserModal } from "./components/EditUserModal/EditUserModal";
import { createContext, useState } from "react";

export const AppContext = createContext();

function App() {
  const [currentPage, setCurrentPage] = useState("contact");
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        darkTheme,
        setDarkTheme,
      }}
    >
      <div className="App">
        <Header />
        <Main />
        <Footer />
        {/* <EditUserModal /> */}
      </div>
    </AppContext.Provider>
  );
}

export default App;
