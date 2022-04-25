import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className={"app-wrapper-header"}>
          <HeaderContainer />
        </div>
        <div className={"app-wrapper-nav"}>
          <Navbar />
        </div>
        <div className={"app-wrapper-content"}>
          <Routes>
            <Route path={"/profile/*"} element={<ProfileContainer />} />
            <Route path={"/dialogs/*"} element={<DialogsContainer />} />
            <Route path={"/users/*"} element={<UsersContainer />} />
            <Route path={"/login/*"} element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
