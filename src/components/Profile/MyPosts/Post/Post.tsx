import React from 'react';
import classes from "./Post.module.css";


interface PostsProps {
    message?: string;
    likeCount: number;
}

function Post(props: PostsProps) {
    return (
        <div className={classes.item}>
            <img className={classes.postImg} src='https://www.blexar.com/avatar.png' alt='ava'/>
            {props.message}
            <span>likes = {props.likeCount}</span>
        </div>
    )
}

export default Post