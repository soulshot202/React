import React, { useState } from "react";
import styles from "./Contacts.module.css";

export default function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    alert("Aciu kad parasete!");
  }
  return (
    <div className={styles.contacts}>
      <form>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}></textarea>
        <button type="submit" onClick={handleSubmit}>
          Send
        </button>
      </form>
    </div>
  );
}
