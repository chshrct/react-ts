import { ComponentType, FC, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/AuthRedirect/withAuthRedirect";
import {
  getProfile,
  getStatus,
  updateStatus,
} from "../../redux/profile-reducer";
import { AppStateType } from "../../redux/redux-store";
import Profile from "./Profile";

const ProfileContainer: FC<ReduxPropsType> = (props) => {
  const {
    getProfile: getUserProfile,
    getStatus,
    authUserId,
    profile,
    status,
    updateStatus,
  } = props;
  const param = useParams();

  useEffect(() => {
    const userId = param["*"] ? +param["*"] : authUserId;
    getUserProfile(userId!);
    getStatus(userId!);
  }, [authUserId, getStatus, getUserProfile, param]);

  return (
    <Profile
      authUserId={authUserId}
      profile={profile}
      status={status}
      updateStatus={updateStatus}
    />
  );
};

const mapStateToProps = (state: AppStateType) => {
  return {
    authUserId: state.auth.userId,
    profile: state.profilePage.profile,
    status: state.profilePage.status,
  };
};
const mapDispatchToProps = {
  getProfile,
  getStatus,
  updateStatus,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxPropsType = ConnectedProps<typeof connector>;

export default compose<ComponentType>(
  connector,
  withAuthRedirect
)(ProfileContainer);
