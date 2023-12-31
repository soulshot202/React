import React, { useState } from "react";
import Button from "../SignButton/SignButton";
import Image from "../Image/Image";
import styles from "./RegisterForm.module.css";
import { validEmail, validPassword } from "../../Regex/Regex";
import axios from "axios";

export default function RegisterForm({ open, setOpen }) {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    if (!Name || !Email || !Password) {
      return alert("Fill in all the fields");
    }

    const validate = () => {
      if (!validEmail.test(Email)) {
        return alert("Please provide valid email");
      }
      if (!validPassword.test(Password)) {
        return alert("Password must have numbers and letters");
      }

      return true;
    };

    if (!validate()) {
      return;
    } else {
      try {
        const { data } = await axios.post("http://localhost:3001/register", {
          name: Name,
          email: Email,
          password: Password,
        });
        console.log(data);
        setEmail("");
        setName("");
        setPassword("");
        return alert("registration success");
      } catch (error) {
        if (error.message === "Request failed with status code 409") {
          return alert("User with this email already exists");
        }
        if (error.message === "Request failed with status code 400") {
          return alert("Please provide name, email and password");
        }
        if (error.message === "Request failed with status code 401") {
          return alert("Password must be between 6 and 30 characters");
        }
        if (error.message === "Request failed with status code 402") {
          return alert("Name must be between 6 and 32 characters");
        }
        if (error.message === "Request failed with status code 403") {
          return alert("Email must contain @");
        }
        if (error.message === "Request failed with status code 404") {
          return alert("Email must contain .");
        }
        if (error.message === "Request failed with status code 405") {
          return alert("Email must be between 6 and 50 characters");
        }
      }
    }
  }

  return (
    <div className={styles.registerForm}>
      <Image url="https://img.freepik.com/free-photo/view-snowman-with-winter-landscape-snow_23-2150635342.jpg?t=st=1700154315~exp=1700157915~hmac=de7829df2b5213153ccb36c220294e1d1a51d8e7f69717adfc88c49060219d42&w=740" />
      <div className={styles.close}>
        <div onClick={() => setOpen(!open)}>X</div>
      </div>
      <form type="submit">
        <div className={styles.header}>
          <h1>Get Started</h1>
          <p>Alredy have an account?</p>
          <p>sign in</p>
        </div>

        <div className={styles.buttonContainer}>
          <Button
            text="Sign Up"
            link="https://www.google.com"
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png"
            className={styles.button}
          />
          <Button
            text="Sign Up"
            src="https://i.postimg.cc/2jMcx7XY/fb.jpg"
            link="https://www.facebook.com/"
            className={styles.button}
          />
        </div>
        <p>Or</p>

        <div className={styles.inputContainer}>
          <div>
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              id="Name"
              placeholder="John Smith"
              required
              onChange={(e) => setName(e.target.value)}
              value={Name}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="n9C7z@example.com"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={Email}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="*******"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={Password}
            />
          </div>
        </div>

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
