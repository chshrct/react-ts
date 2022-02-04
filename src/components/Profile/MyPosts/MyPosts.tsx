import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import style from './MyPosts.module.css'

function MyPosts() {
    return (
        <div className={style.postsBlock}>
            <h2>my post</h2>
            <div>
                <h3>new post</h3>
            </div>
            <div className={classes.posts}>
                <Post message='hello' likeCount={10}/>
                <Post message='hiho' likeCount={5}/>
            </div>
        </div>
    )
}

export default MyPosts