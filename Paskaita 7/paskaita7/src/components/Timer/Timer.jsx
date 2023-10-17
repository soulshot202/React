import React, { useState, useRef } from "react";

export default function Timer() {
  const [counter, setCounter] = useState(0);

  const intervalRef = useRef();

  function buttonHandler() {
    console.log(intervalRef.current);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    } else {
      intervalRef.current = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
    }
  }

  return (
    <div>
      <h3>{counter}</h3>
      <button onClick={buttonHandler}>Play/Pause</button>
    </div>
  );
}
