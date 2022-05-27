import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import "./App.css";
import { Main } from "./components/Main/Main";
import { EditUserModal } from "./components/EditUserModal/EditUserModal";
import { createContext, useReducer, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";

export const AppContext = createContext();

const initialState = {
  showUpdatePopUp: false,
  currentSelectedUser: {
    id: null,
    last_name: "",
    first_name: "",
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

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <AppContext.Provider
      value={{
        darkTheme,
        setDarkTheme,
        // state,
        // dispatch,
      }}
    >
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <Header />
            <Main />
            <Footer />
            <EditUserModal />
          </div>
        </Provider>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
