import React from "react";
import styles from "./Card.module.css";

export default function Card() {
  return (
    <div className={styles.card}>
      <h6 data-testid="title">Visas parazitas</h6>
      <div className={styles.buttons}>
        <div>
          View on <a href="https://twitter.com">Twitter</a>
        </div>

        <div>
          Share on <a href="https://facebook.com">Facebook</a>
        </div>
      </div>
    </div>
  );
}
