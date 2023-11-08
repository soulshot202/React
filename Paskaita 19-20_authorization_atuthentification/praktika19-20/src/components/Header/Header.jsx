import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <header className={styles.header}>
      {!localStorage.getItem("token") ? (
        <>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      ) : (
        <>
          {" "}
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </header>
  );
}
