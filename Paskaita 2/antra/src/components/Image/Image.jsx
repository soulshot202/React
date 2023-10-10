import React from "react";
import styles from "./Image.module.css";

export default function Image({ imageSource, descriptionText }) {
  return (
    <div>
      <img
        className={styles.container}
        src={imageSource}
        alt={descriptionText}
      />
      <p>{descriptionText}</p>
    </div>
  );
}
