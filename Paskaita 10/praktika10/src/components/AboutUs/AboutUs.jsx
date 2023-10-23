import React from "react";
import styles from "./AboutUs.module.css";
export default function AboutUs() {
  return (
    <div className={styles.about}>
      <h1>About Us</h1>
      <h3>Mano puslapis </h3>
      <section>
        <img
          src="https://cdn.pixabay.com/photo/2023/07/23/08/46/flower-8144644_1280.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>
    </div>
  );
}
