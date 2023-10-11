import React, { useState } from "react";
import Text2 from "./components/Text2/Text2";

export default function Text() {
  const [numberState, setNumberState] = useState(10);
  const [text, setText] = useState("Hello");
  function buttonHandler() {
    setNumberState(numberState + 1);
  }
  return (
    <div>
      Text
      {numberState} <br />
      <button onClick={buttonHandler}>Click</button>
    </div>
  );
}
