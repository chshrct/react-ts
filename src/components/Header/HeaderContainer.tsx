import { Component } from "react";
import { ConnectedProps } from "react-redux";
import { connect } from "react-redux";
import { auth, logout } from "../../redux/auth-reducer";
import { AppState } from "../../redux/redux-store";
import Header from "./Header";

export class HeaderContainer extends Component<ReduxPropsHeader> {
  componentDidMount() {
    this.props.auth();
  }

  render() {
    return (
      <Header
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  login: state.auth.login,
  email: state.auth.email,
  isAuth: state.auth.isAuth,
});
const mapDispatchToProps = { auth,logout };

const connector = connect(mapStateToProps, mapDispatchToProps);
export type ReduxPropsHeader = ConnectedProps<typeof connector>;

export default connector(HeaderContainer);
