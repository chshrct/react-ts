import { Component } from "react";
import { ConnectedProps } from "react-redux";
import { connect } from "react-redux";
import { AuthUser } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";
import Header from "./Header";

export class HeaderContainer extends Component<ReduxPropsType> {
  componentDidMount() {
    this.props.AuthUser();
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
const mapDispatchToProps = { AuthUser };

const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxPropsType = ConnectedProps<typeof connector>;

export default connector(HeaderContainer);
