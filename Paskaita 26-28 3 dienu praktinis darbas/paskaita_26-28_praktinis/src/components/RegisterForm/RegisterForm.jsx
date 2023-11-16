import React from "react";
import Button from "../SignButton/SignButton";
import Image from "../Image/Image";
import styles from "./RegisterForm.module.css";

export default function RegisterForm({ open, setOpen }) {
  return (
    <div className={styles.registerForm}>
      <Image url="https://img.freepik.com/free-photo/view-snowman-with-winter-landscape-snow_23-2150635342.jpg?t=st=1700154315~exp=1700157915~hmac=de7829df2b5213153ccb36c220294e1d1a51d8e7f69717adfc88c49060219d42&w=740" />
      <div className={styles.close}>
        <div onClick={() => setOpen(!open)}>X</div>
      </div>
      <form>
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
            <input type="text" id="Name" placeholder="John Smith" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="n9C7z@example.com" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="*******" />
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
