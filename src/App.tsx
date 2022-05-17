import React from "react";
import { ReactNode } from "react";
import { ConnectedProps } from "react-redux";
import { connect } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { initializeApp } from "./redux/app-reducer";
import { AppRootStateType } from "./redux/redux-store";
import Preloader from "./shared/Preloader/Preloader";

class App extends React.Component<AppReduxPropsType> {
  componentDidMount() {
    this.props.initializeApp();
  }
  render(): ReactNode {
    if(!this.props.initialized) return <Preloader/>
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
}

const mapStateToProps = (state:AppRootStateType)=>({
  initialized:state.app.initialized
})

const connector = connect(mapStateToProps,{initializeApp})
type AppReduxPropsType = ConnectedProps<typeof connector>

export default connector(App);
