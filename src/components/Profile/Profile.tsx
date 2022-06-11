import { FC } from 'react';

import { ProfileType } from '../../redux/profile-reducer';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

type PropsType = {
  profile: ProfileType;
  status: string;
  updateStatus: (status: string) => void;
  authUserId: number | null;
};

const Profile: FC<PropsType> = ({ profile, status, updateStatus, authUserId }) => {
  return (
    <div>
      <ProfileInfo
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        authUserId={authUserId}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
