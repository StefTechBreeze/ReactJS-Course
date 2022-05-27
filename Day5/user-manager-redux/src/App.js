import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import "./App.css";
import { Main } from "./components/Main/Main";
import { EditUserModal } from "./components/EditUserModal/EditUserModal";
import { createContext, useReducer, useState } from "react";
import { BrowserRouter } from "react-router-dom";

export const AppContext = createContext();

const initialState = {
  showUpdatePopUp: false,
};

const reducer = (state, action) => {
  console.log("action", action);

  switch (action.type) {
    case "open-update-pup-up":
      return { showUpdatePopUp: true };
    case "close-update-pup-up":
      return { showUpdatePopUp: false };
    default:
      return state;
  }
};

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("state", state);

  return (
    <AppContext.Provider
      value={{
        darkTheme,
        setDarkTheme,
        state,
        dispatch,
      }}
    >
      <BrowserRouter>
        <div className="App">
          <Header />
          <Main />
          <Footer />
          <EditUserModal />
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
