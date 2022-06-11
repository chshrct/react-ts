import { FC } from 'react';

import { ProfileType } from '../../../redux/profile-reducer';
import Preloader from '../../../shared/Preloader/Preloader';

import style from './ProfileInfo.module.css';
import ProfileStatusFunctional from './ProfileStatus/ProfileStatusFunctional';

type PropsType = {
  profile: ProfileType;
  status: string;
  updateStatus: (status: string) => void;
  authUserId: number | null;
};

export const ProfileInfo: FC<PropsType> = ({
  profile,
  status,
  updateStatus,
  authUserId,
}) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683__340.png"
          alt="mountain"
        />
      </div>
      <div className={style.descriptionBlock}>
        <img src={profile.photos.small} alt="ava" />
        <ProfileStatusFunctional
          status={status}
          updateStatus={updateStatus}
          authUserId={authUserId}
          profileId={profile.userId}
        />
        <div>{profile.lookingForAJobDescription}</div>
      </div>
    </div>
  );
};
