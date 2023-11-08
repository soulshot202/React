import React from "react";

export default function Input({ value = "", onChange, text, type, id }) {
  return (
    <div>
      <label htmlFor={id}>{text}</label>
      <input type={type} id={id} value={value} onChange={onChange} />
    </div>
  );
}
