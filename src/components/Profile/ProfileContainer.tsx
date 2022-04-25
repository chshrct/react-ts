import { FC, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../../redux/profile-reducer";
import { AppStateType } from "../../redux/redux-store";
import Profile from "./Profile";

const ProfileContainer: FC<ReduxPropsType> = (props) => {
  const { profile, getUserProfile } = props;
  const param = useParams();
  useEffect(() => {
    param["*"]?getUserProfile(Number(param["*"])):getUserProfile(2)
  }, [param, getUserProfile]);

  return <Profile {...props} profile={profile} />;
};

const mapStateToProps = (state: AppStateType) => {
  return {
    profile: state.profilePage.profile,
  };
};
const mapDispatchToProps = {
  getUserProfile,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxPropsType = ConnectedProps<typeof connector>;

export default connector(ProfileContainer);
