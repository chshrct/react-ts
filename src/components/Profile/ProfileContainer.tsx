import { ComponentType, FC, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/AuthRedirect/withAuthRedirect";
import {
  getProfile,
  getStatus,
  updateStatus,
} from "../../redux/profile-reducer";
import { AppRootStateType } from "../../redux/redux-store";
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
  let navigate = useNavigate();

  useEffect(() => {
    const userId = param["*"] ? +param["*"] : authUserId;
    if (userId) {
      getUserProfile(userId);
      getStatus(userId);
    }else{
      navigate('/login')
    }
  }, [authUserId, getStatus, getUserProfile, param,navigate]);

  return (
    <Profile
      authUserId={authUserId}
      profile={profile}
      status={status}
      updateStatus={updateStatus}
    />
  );
};

const mapStateToProps = (state: AppRootStateType) => {
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
)(ProfileContainer);