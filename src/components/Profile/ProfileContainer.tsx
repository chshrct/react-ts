import axios from "axios";
import { Component, FC, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { setUserProfile } from "../../redux/profile-reducer";
import { AppStateType } from "../../redux/redux-store";
import Profile from "./Profile";

const ProfileContainer: FC<MapDispatchToProps & MapStateToProps> = (props) => {
  const param = useParams();
  useEffect(() => {
    param['*'] && axios
      .get(
        `https://social-network.samuraijs.com/api/1.0//profile/${param["*"]}`
      )
      .then((response) => {
        props.setUserProfile(response.data);
      });
  }, []);

  return <Profile {...props} profile={props.profile} />;
};

const mapStateToProps = (state: AppStateType) => {
  return {
    profile: state.profilePage.profile,
  };
};
const mapDispatchToProps = {
  setUserProfile,
};
type MapDispatchToProps = typeof mapDispatchToProps;
type MapStateToProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
