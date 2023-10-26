import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import styles from "./NewsItem.module.css";

export default function NewsItem() {
  const { id } = useParams();
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(({ data }) => {
        setNews(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.newsItem}>
      <h1>Naujiena:</h1>
      <h4>{news.title}</h4>
      <p>{news.body}</p>
      <Link to="/news">Back</Link>
    </div>
  );
}
