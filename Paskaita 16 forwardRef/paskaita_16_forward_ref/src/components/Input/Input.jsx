import React, { forwardRef } from "react";

function Input({ text }, ref) {
  return (
    <>
      <label>{text}</label>
      <input type="text" ref={ref} />
    </>
  );
}

export default forwardRef(Input); // export default Input;
