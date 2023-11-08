import React from "react";
import { Link } from "react-router-dom";
import "./Header.module.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <header>
      <Link to="/">Home</Link>
      {/* <Link to="/login">Login</Link> */}

      {localStorage.getItem("token") ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </header>
  );
}
