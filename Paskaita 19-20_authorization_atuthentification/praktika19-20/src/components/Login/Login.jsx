import React from "react";
import Input from "../Input/Input";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginEndpoint = "http://localhost:3001/login";
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post(loginEndpoint, {
        username: username,
        password: password,
      });

      localStorage.setItem("token", data.token);
      alert("Login successful");
      navigate("/posts");
    } catch (error) {
      return alert(error.message);
    }
  }

  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          text="Username"
          type="text"
          id="username"
        />
        <Input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          text="Password"
          type="password"
          id="password"
        />
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
}
