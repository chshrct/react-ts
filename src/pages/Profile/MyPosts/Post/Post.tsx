import React, { FC } from 'react';

import classes from './Post.module.css';

type PropsType = {
  message: string;
  likeCount: number;
};

export const Post: FC<PropsType> = ({ message, likeCount }) => {
  return (
    <div className={classes.item}>
      <img
        className={classes.postImg}
        src="https://www.blexar.com/avatar.png"
        alt="ava"
      />
      {message}
      <span>likes = {likeCount}</span>
    </div>
  );
};

export default Post;
