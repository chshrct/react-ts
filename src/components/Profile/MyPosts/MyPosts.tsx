import React, { ChangeEvent } from "react";
import AddPostForm, { ValuesType } from "./AddPostForm/AddPostForm";
import style from "./MyPosts.module.css";
import { MyPostsProps } from "./MyPostsContainer";
import Post from "./Post/Post";

const MyPosts: React.FC<MyPostsProps> = (props) => {
  let postsList = props.posts.map((post) => (
    <Post
      key={post.id}
      id={post.id}
      message={post.message}
      likeCount={post.likeCount}
    />
  ));
  const onAddPost = (value: ValuesType) => {
    props.addPost(value);
  };
  return (
    <div className={style.postsBlock}>
      <h2>My posts</h2>
      <AddPostForm onAddPost={onAddPost} />
      <div>
        <h3>new post</h3>
      </div>
      <div className={style.posts}>{postsList}</div>
    </div>
  );
};

export default MyPosts;
