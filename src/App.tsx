import { Route, Routes } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
  return (
    <div className="app-wrapper">
      <div className={"app-wrapper-header"}>
        <Header />
      </div>
      <div className={"app-wrapper-nav"}>
        <Navbar />
      </div>
      <div className={"app-wrapper-content"}>
        <Routes>
          <Route path={"/profile/*"} element={<ProfileContainer />} />
          <Route path={"/dialogs/*"} element={<DialogsContainer />} />
          <Route path={"/users/*"} element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
