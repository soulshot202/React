import React, { useState } from "react";
import Label from "../Label/Label";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [Name, setName] = useState("");
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Subject, setSubject] = useState("none");
  const [checkbox, setCheckbox] = useState(false);

  const [isValidUsername, setIsValidUsername] = useState({});
  const [isValidName, setIsValidName] = useState({});
  const [isValidEmail, setIsValidEmail] = useState({});
  const [isValidMessage, setIsValidMessage] = useState({});

  const [Message, setMessage] = useState("");

  function checkName(e) {
    if (e.target.value.length > 3 && e.target.value.length < 20) {
      setIsValidName(styles.green);
    } else {
      setIsValidName(styles.red);
    }
    setName(e.target.value);
  }
  function checkUserName(e) {
    if (e.target.value.length >= 3 && e.target.value.length < 20) {
      setIsValidUsername(styles.green);
    } else {
      setIsValidUsername(styles.red);
    }
    setUserName(e.target.value);
  }

  function checkMessage(e) {
    if (Message.length > 10) {
      setIsValidMessage(styles.green);
    } else {
      setIsValidMessage(styles.red);
    }
    setMessage(e.target.value);
  }

  function checkEmail(e) {
    if (
      e.target.value.length > 5 &&
      e.target.value.length < 30 &&
      e.target.value.includes("@") &&
      e.target.value.includes(".")
    ) {
      setIsValidEmail(styles.green);
    } else {
      setIsValidEmail(styles.red);
    }
    setEmail(e.target.value);
  }
  function handleSubmit(e) {
    if (checkbox === false) {
      alert("You must accept the terms and conditions");
      return;
    }

    if (Subject === "none") {
      alert("Please select a subject");
      return;
    }

    e.preventDefault();
    console.log("Name:", Name);
    console.log("UserName:", UserName);
    console.log("Email:", Email);
    console.log("Message:", Message);
    console.log("Subject:", Subject);
  }
  return (
    <form className={styles.container}>
      <div className={styles.form}>
        <h1>Contact Form</h1>
        <div className={styles.full}>
          <Label labelName="Name" />
          <TextInput
            id="name"
            onChange={(e) => checkName(e)}
            className={isValidName}
          />
        </div>
        <div className={styles.full}>
          <Label labelName="UserName" />
          <TextInput
            id="UserName"
            onChange={checkUserName}
            className={isValidUsername}
          />
        </div>
        <div className={styles.full}>
          <Label labelName="Email" />
          <TextInput
            id="email"
            onChange={checkEmail}
            className={isValidEmail}
          />
        </div>
        <div className={styles.full}>
          <Label labelName="Subject" /> <br />
          <select
            name=""
            id="Subject"
            onChange={(e) => setSubject(e.target.value)}>
            <option value="none">choose subject..</option>
            <option value="politika">Politika</option>
            <option value="ekonomika">Ekonomika</option>
            <option value="sveikata">Sveikata</option>
            <option value="auto">Automobiliai</option>
            <option value="sportas">Sportas</option>
          </select>
        </div>

        <div className={styles.full}>
          <Label labelName="Message" />
          <br />
          <textarea
            name=""
            id="Message"
            cols="30"
            rows="10"
            onChange={checkMessage}
            className={isValidMessage}></textarea>
        </div>

        <div className={styles.terms}>
          <input
            type="checkbox"
            onChange={(e) => {
              setCheckbox((prev) => !prev);
            }}
          />
          <span>
            I agree with the <a href="#">terms and conditions</a>
          </span>
        </div>

        <div className={styles.yesno}>
          <div>
            {" "}
            <input type="radio" name="yesno" />
            <Label labelName="Yes" />
          </div>
          <div>
            {" "}
            <input type="radio" name="yesno" />
            <Label labelName="No" />
          </div>
        </div>

        <div className={styles.buttons}>
          <Button type="submit" btnName="Submit" onClick={handleSubmit} />
          <Button type="button" btnName="Cancel" />
        </div>
      </div>
    </form>
  );
}
