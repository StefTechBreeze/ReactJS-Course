import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import "./App.css";
import { Main } from "./components/Main/Main";
// import { EditUserModal } from "./components/EditUserModal/EditUserModal";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      {/* <EditUserModal /> */}
    </div>
  );
}

export default App;
