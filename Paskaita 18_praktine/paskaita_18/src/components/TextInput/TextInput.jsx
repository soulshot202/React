import React from "react";

export default function TextInput({ id, onChange, className }) {
  return (
    <div>
      <input
        id={id}
        type="text"
        required
        onChange={onChange}
        className={className}
      />
    </div>
  );
}
