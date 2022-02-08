import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import style from './MyPosts.module.css'

function MyPosts() {

    let postsData=[
        {id:1,message:'hello',likeCount:10},
        {id:2,message:'hiho',likeCount:5}
    ]
    let postsList = postsData.map(
        post=><Post message={post.message} likeCount={post.likeCount}/>
    )

    return (
        <div className={style.postsBlock}>
            <h2>my post</h2>
            <div>
                <h3>new post</h3>
            </div>
            <div className={classes.posts}>
                {postsList}
            </div>
        </div>
    )
}

export default MyPosts