import React, {ChangeEvent} from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';
import {postType} from "../Profile";



type MyPostsType={
    myPosts:Array<postType>
    addPost:()=>void
    newPostText:string
    newPostTextEdit:(s:string)=>void
}

function MyPosts(props:MyPostsType) {

    let postsList = props.myPosts.map(
        post=><Post key={post.id} id ={post.id} message={post.message} likeCount={post.likeCount}/>
    )
    const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.newPostTextEdit(e.currentTarget.value)
    }

    return (
        <div className={style.postsBlock}>
            <h2>My posts</h2>
            <div>
                <textarea  value={props.newPostText} onChange={onPostChange}/>
                <div>
                    <button onClick={props.addPost}>add</button>
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