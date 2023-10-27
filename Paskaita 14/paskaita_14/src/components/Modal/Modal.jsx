import React from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

export default function Modal({ children, isOpen, title, onClose }) {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={styles.modal}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h4>{title}</h4>
        </div>

        {children}
        <div className={styles.footer}>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>,
    document.body
  );
}
