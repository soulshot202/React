import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <Link to="/">Home</Link>
      <Link to="/create">Add+</Link>
    </header>
  );
}
