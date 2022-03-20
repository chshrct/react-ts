import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


const Profile:React.FC = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>

    )
}

export default Profile