import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type PropsType = {
    profile:any
}

const Profile:React.FC<PropsType> = ({profile}) => {
    return (
        <div>
            <ProfileInfo profile={profile}/>
            <MyPostsContainer/>
        </div>

    )
}

export default Profile