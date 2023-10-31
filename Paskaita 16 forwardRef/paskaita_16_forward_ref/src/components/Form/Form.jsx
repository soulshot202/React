import React, { useRef } from "react";
import Input from "../Input/Input";

export default function Form() {
  const inputRef = useRef();
  const inputRef2 = useRef();
  function handleButton() {
    inputRef.current.focus();
  }

  return (
    <div>
      <br />
      <Input text="input komponentas" ref={inputRef} />
      <br />
      <Input text="input komponentas2" ref={inputRef2} />
      <br />
      <Input text="input komponentas3" />
      <br />
      <Input text="input komponentas4" />
      <br />
      <input type="text" />
      <button onClick={handleButton}>Focus</button>
    </div>
  );
}
