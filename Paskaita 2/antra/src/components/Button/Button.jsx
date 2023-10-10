import React from "react";
import styles from "./Button.module.css";

export default function Button(props) {
  console.log(props);

  return (
    <button className={styles.background} onClick={props.onClick}>
      {props.text}
    </button>
  );
}
