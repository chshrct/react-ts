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
    newPostText:string
}

type profileStateType ={
    state:profilePageType
    dispatch:any
}

function Profile(props:profileStateType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                myPosts={props.state.posts}
                dispatch={props.dispatch}
                newPostText={props.state.newPostText}
            />
        </div>

    )
}

export default Profile