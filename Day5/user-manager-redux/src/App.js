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
  currentSelectedUser: {
    id: null,
    lastName: "",
    firstName: "",
    email: "",
  },
  userList: [
    {
      id: 1,
      first_name: "Stefan",
      last_name: "Radusi",
      email: "radusi.stefan@gmail.com",
    },
    {
      id: 2,
      first_name: "Corina",
      last_name: "rus",
      email: "rus.corina@gmail.com",
    },
  ],
};

const reducer = (state, action) => {
  console.log("action", action);

  switch (action.type) {
    case "open-update-pup-up":
      return { ...state, showUpdatePopUp: true };
    case "close-update-pup-up":
      return { ...state, showUpdatePopUp: false };
    case "set-current-selected-user-values":
      return {
        ...state,
        currentSelectedUser: action.payload,
      };
    case "create-user":
      return {
        ...state,
        userList: [
          ...state.userList,
          { ...state.currentSelectedUser, id: Number(new Date()) },
        ],
        showUpdatePopUp: false,
        currentSelectedUser: { ...initialState.currentSelectedUser },
      };

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
