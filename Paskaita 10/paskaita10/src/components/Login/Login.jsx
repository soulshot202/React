import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") === "123") {
      navigate("/");
    }
  });

  async function loginButton() {
    axios
      .post("http://localhost:3001/login", {
        username: userName,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("token", "123");
        navigate("/");
      })
      .catch((error) => {
        alert("neteisingi prisijungimo duomenys");
      });
  }

  return (
    <div>
      <label htmlFor="userName">User Name:</label>
      <input
        type="text"
        name=""
        value={userName}
        id="userName"
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        value={password}
        name=""
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={loginButton}>Log in</button>
    </div>
  );
}
