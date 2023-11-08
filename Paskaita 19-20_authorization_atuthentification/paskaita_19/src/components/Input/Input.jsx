import React from "react";

export default function Input({ text, value = "", onChange, type, id }) {
  return (
    <div>
      <label htmlFor={id}>{text}</label>
      <input type={type} id={id} value={value} onChange={onChange} />
    </div>
  );
}
