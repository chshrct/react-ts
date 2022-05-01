import { FC } from "react";
import { ProfileType } from "../../../redux/profile-reducer";
import Preloader from "../../../shared/Preloader/Preloader";
import style from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

type PropsType = {
  profile: ProfileType;
  status:string
  updateStatus:(status:string)=>void
};

export const ProfileInfo:FC<PropsType> = ({ profile,status,updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  } else {
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
          <ProfileStatus status={status} updateStatus={updateStatus}/>
          <div>{profile.lookingForAJobDescription}</div>
        </div>
      </div>
    );
  }
};
