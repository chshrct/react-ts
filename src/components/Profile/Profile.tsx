import { ProfileType } from "../../redux/profile-reducer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

type PropsType = {
  profile: ProfileType;
  status:string
  updateStatus:(status:string)=>void
};

const Profile: React.FC<PropsType> = ({ profile,status,updateStatus }) => {
  return (
    <div>
      <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
