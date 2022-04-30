import { FC } from "react";
import Preloader from "../../../shared/Preloader/Preloader";
import style from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

type PropsType = {
  profile: any;
};

export const ProfileInfo:FC<PropsType> = ({ profile }) => {
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
          <ProfileStatus status="Ama Hasla Ama Gangsta"/>
          <div>{profile.lookingForAJobDescription}</div>
        </div>
      </div>
    );
  }
};
