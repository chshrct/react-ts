import React from 'react';
import classes from './Post.module.css'

function Post() {
  return (
    <div className={classes.item}>
      <img className={classes.postImg} src='https://www.blexar.com/avatar.png' alt='ava'></img>
      post1
    </div>
  )
}

export default Post