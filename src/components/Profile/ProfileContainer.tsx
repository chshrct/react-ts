/* eslint-disable @typescript-eslint/no-shadow */
import { ComponentType, FC, useEffect } from 'react';

import { connect, ConnectedProps } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { compose } from 'redux';

import { getProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import { AppRootStateType } from '../../redux/redux-store';

import Profile from './Profile';

const ProfileContainer: FC<ReduxPropsType> = props => {
  const { getProfile, getStatus, authUserId, profile, status, updateStatus } = props;
  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const userId = param['*'] ? +param['*'] : authUserId;
    if (userId) {
      getProfile(userId);
      getStatus(userId);
    } else {
      navigate('/login');
    }
  }, [authUserId, getStatus, getProfile, param, navigate]);

  return (
    <Profile
      authUserId={authUserId}
      profile={profile!}
      status={status}
      updateStatus={updateStatus}
    />
  );
};

const mapStateToProps = (state: AppRootStateType) =>
  ({
    authUserId: state.auth.userId,
    profile: state.profilePage.profile,
    status: state.profilePage.status,
  } as const);

const connector = connect(mapStateToProps, {
  getProfile,
  getStatus,
  updateStatus,
});
type ReduxPropsType = ConnectedProps<typeof connector>;

export default compose<ComponentType>(connector)(ProfileContainer);
