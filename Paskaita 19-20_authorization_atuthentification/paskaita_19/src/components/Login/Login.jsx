import React, { useState } from "react";
import axios from "axios";
import Input from "../Input/Input";
import { useNavigate } from "react-router-dom";

const loginEndpoint = "http://localhost:3001/login";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post(loginEndpoint, {
        username,
        password,
      });
      console.log(data);
      alert("Logged in successfully");
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (error) {
      if (error.message === "Request failed with status code 401") {
        alert("Invalid username or password");
      }
      console.log(error);
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <Input
          text="Username"
          type="text"
          id="usernamelogin"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          text="Password"
          type="password"
          id="passwordlogin"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
