import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img
        src="https://cdn.pixabay.com/photo/2023/09/29/17/27/dunlin-8284260_1280.jpg"
        alt=""
      />
      <nav>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">About</a>
        <a href="#">Contact us</a>
      </nav>
    </header>
  );
}
