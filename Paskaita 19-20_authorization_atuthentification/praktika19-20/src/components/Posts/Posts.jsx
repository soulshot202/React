import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./Posts.module.css";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const postsEndpoint = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      return navigate("/login");
    } else {
      axios
        .get(postsEndpoint)
        .then((response) => {
          setPosts(response.data);
        })
        .catch((error) => {
          console.log(error);
          alert("Error");
        });
    }
  }, []);
  return (
    <div className={styles.posts}>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
