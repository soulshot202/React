import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import styles from "./Register.module.css";

export default function Register() {
  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const registerEndpoint = "http://localhost:3001/register";

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(registerEndpoint, {
        username: newUsername,
        email: newEmail,
        password: newPassword,
      });
      alert("Registration successful");
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert("Error");
    }
  }

  return (
    <div className={styles.register}>
      <h1>Register new account</h1>
      <form onSubmit={handleSubmit}>
        <Input
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          text="Username"
        />

        <Input
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          text="Password"
        />
        <Input
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          text="Email"
        />
        <button type="submit" onClick={handleSubmit}>
          Register
        </button>
      </form>
    </div>
  );
}
