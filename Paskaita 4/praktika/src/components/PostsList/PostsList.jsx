import React, { useState } from "react";
import Button from "../Button/Button";
import axios from "axios";
import Post from "../Post/Post";
import Comment from "../Comment/Comment";
import style from "./PostList.module.css";

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [CommentsTitle, setCommentsTitle] = useState();

  async function getPosts() {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  async function getComments() {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setComments(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }
  const hr = <hr />;

  return (
    <div className={style.container}>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={style.buttons}>
          <Button btnName="Posts" onClick={getPosts} />
          <Button
            btnName="Comments"
            onClick={() => {
              getComments();
              setCommentsTitle("Comments");
            }}
          />
        </div>
      )}
      {posts.length > 0 ? (
        posts.map((post) => {
          return (
            <div>
              <Post title={post.title} body={post.body} />
              <h5>{CommentsTitle}</h5>
              {comments.map((comment) => {
                if (comment.postId === post.id) {
                  return <Comment name={comment.name} body={comment.body} />;
                }
              })}
              {hr}
            </div>
          );
        })
      ) : (
        <div>
          <h1>No posts</h1>
          <h1>No Comments</h1>
        </div>
      )}
    </div>
  );
}
