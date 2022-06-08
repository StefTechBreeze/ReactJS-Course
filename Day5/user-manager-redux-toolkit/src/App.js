import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import "./App.css";
import { Main } from "./components/Main/Main";
import { EditUserModal } from "./components/EditUserModal/EditUserModal";
import { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";

export const AppContext = createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <AppContext.Provider
      value={{
        darkTheme,
        setDarkTheme,
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
