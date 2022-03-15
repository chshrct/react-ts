import React, {ChangeEvent} from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';
import {postType} from "../Profile";


type MyPostsType={
    posts:Array<postType>
    newPostText:string
    onPostChange:(text:string)=>void
    addPost:()=>void
}

function MyPosts(props:MyPostsType) {

    let postsList = props.posts.map(
        post=><Post key={post.id} id ={post.id} message={post.message} likeCount={post.likeCount}/>
    )
    const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        let text = e.currentTarget.value;
        props.onPostChange(text)
    }
    const onAddPost =()=>{
        props.addPost()
    }
    return (
        <div className={style.postsBlock}>
            <h2>My posts</h2>
            <div>
                <textarea  value={props.newPostText} onChange={onPostChange}/>
                <div>
                    <button onClick={onAddPost}>add</button>
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