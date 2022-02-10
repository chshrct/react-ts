import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export type postType ={
    id:number
    message:string
    likeCount:number
}

type profilePageType ={
    posts:Array<postType>
}

type profileStateType ={
    state:profilePageType
}

function Profile(props:profileStateType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts myPosts={props.state.posts}/>
        </div>

    )
}

export default Profile