import { FC } from 'react';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

import { ProfileType } from 'shared/api/profile';

type PropsType = {
  profile: ProfileType;
  status: string;
  updateStatus: (payload: { status: string }) => void;
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
