import React, { useEffect, useState } from "react";
import styles from "./News.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function News() {
  const [news, setNews] = useState([]);
  const [color, setColor] = useState("blue");

  function changeColor() {
    if (color === "blue") {
      setColor("red");
    } else {
      setColor("blue");
    }
  }

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setNews(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.news}>
      <h1>News</h1>
      <ul>
        {news.map((item) => (
          <li key={item.id} style={{ color: color }}>
            <Link to={`/news/${item.id}`}> {item.title} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
