import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { setUserData } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";
import Header from "./Header";

export class HeaderContainer extends Component<
  MapStateToPropsType & MapDispatchToPropsType,
  any
> {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true,
      })
      .then((resolve) => {
        resolve.data.resultCode === 0 &&
          this.props.setUserData(
            resolve.data.data.id,
            resolve.data.data.email,
            resolve.data.data.login
          );
      });
  }

  render() {
    return (
      <Header
        login={this.props.login}
        email={this.props.email}
        isAuth={this.props.isAuth}
      />
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  login: state.auth.login,
  email: state.auth.email,
  isAuth: state.auth.isAuth,
});
const mapDispatchToProps = { setUserData };

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchToPropsType = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
