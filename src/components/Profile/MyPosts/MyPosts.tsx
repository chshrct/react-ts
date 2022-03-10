import React, {ChangeEvent} from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';
import {postType} from "../Profile";



type MyPostsType={
    myPosts:Array<postType>
    newPostText:string
    dispatch:any
}

function MyPosts(props:MyPostsType) {

    let postsList = props.myPosts.map(
        post=><Post key={post.id} id ={post.id} message={post.message} likeCount={post.likeCount}/>
    )
    const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.dispatch({
            type:'UPDATE-NEW-POST-TEXT',
            newPostText:e.currentTarget.value})
    }
    const addPost =()=>{
        props.dispatch({
            type:'ADD-POST'})
    }
    return (
        <div className={style.postsBlock}>
            <h2>My posts</h2>
            <div>
                <textarea  value={props.newPostText} onChange={onPostChange}/>
                <div>
                    <button onClick={addPost}>add</button>
                </div>
            </div>
            <div>
                <h3>new post</h3>
            </div>
            <div className={style.posts}>
                {postsList}
            </div>
        </div>
    )
}

export default MyPosts