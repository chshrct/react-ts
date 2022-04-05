import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profile-reducer";
import { AppStateType } from "../../redux/redux-store";
import Profile from "./Profile";

type MapDispatchToProps = typeof mapDispatchToProps
type MapStateToProps = ReturnType<typeof mapStateToProps>

class ProfileContainer extends Component<MapDispatchToProps & MapStateToProps> {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0//profile/2")
      .then((response) => {
        this.props.setUserProfile(response.data)
      });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile}/>;
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    profile:state.profilePage.profile
  };
};
const mapDispatchToProps = {
  setUserProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
