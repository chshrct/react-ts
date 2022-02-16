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
    addPost:()=>void
    newPostTextEdit:()=>void
}

function Profile(props:profileStateType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                myPosts={props.state.posts}
                addPost={props.addPost}
                newPostText={props.state.newPostText}
                newPostTextEdit={props.newPostTextEdit}
            />
        </div>

    )
}

export default Profile