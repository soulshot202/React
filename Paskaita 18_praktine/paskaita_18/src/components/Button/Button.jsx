import React from "react";

export default function Button({ type, btnName, onClick }) {
  return (
    <button type={type} onClick={onClick}>
      {btnName}
    </button>
  );
}
