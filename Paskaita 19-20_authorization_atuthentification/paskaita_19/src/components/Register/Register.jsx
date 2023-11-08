import React, { useState } from "react";
import Input from "../Input/Input";
import axios from "axios";

const registerEndpoint = "http://localhost:3001/register";

export default function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post(registerEndpoint, {
        username: userName,
        password,
      });
      console.log(data);
      alert("Registered successfully");
    } catch (error) {
      if (error.message === "Request failed with status code 400") {
        alert("User already exists");
      }
      console.log(error);
    }
  }
  return (
    <div>
      <form onSubmit={handleRegister}>
        <Input
          text="Name"
          type="text"
          id="name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <Input
          text="Password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
