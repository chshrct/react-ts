import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

function Profile(props:any) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profile}/>
        </div>

    )
}

export default Profile