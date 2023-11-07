import React from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

export default function Modal({ open, children, title }) {
  if (!open) {
    return null;
  }
  return createPortal(
    <div className={styles.modal}>
      <h2>{title}</h2>
      {children}
      <button>Buy</button>
    </div>,
    document.body
  );
}
