import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
function MyPosts() {
  return (
    <div>
      my post
      <div>
        new post
      </div>
      <div className={classes.posts}>
        <Post message='hello' likeCount={10} />
        <Post message='hiho' likeCount={5} />
      </div>
    </div>
  )
}

export default MyPosts