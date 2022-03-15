import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export type postType ={
    id:number
    message:string
    likeCount:number
}

type profileStateType ={
    store:any
}

function Profile(props:profileStateType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
            store={props.store}
            />
        </div>

    )
}

export default Profile