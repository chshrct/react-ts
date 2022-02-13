import React, {useRef} from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';
import {postType} from "../Profile";



type MyPostsType={
    myPosts:Array<postType>
}

function MyPosts(props:MyPostsType) {

    let postsList = props.myPosts.map(
        post=><Post key={post.id} id ={post.id} message={post.message} likeCount={post.likeCount}/>
    )

    let tAreaRef = React.createRef<HTMLTextAreaElement>()

    return (
        <div className={style.postsBlock}>
            <h2>My posts</h2>
            <div>
                <textarea ref={tAreaRef}></textarea>
                <div>
                    <button onClick={()=>{alert(tAreaRef.current?.value)}}>add</button>
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