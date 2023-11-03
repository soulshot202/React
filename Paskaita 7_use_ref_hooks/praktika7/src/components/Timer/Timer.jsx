import React, { useState, useRef } from "react";

export default function Timer() {
  const [timer, settimer] = useState(0);
  const intervalRef2 = useRef();

  function tick2() {
    clearInterval(intervalRef2.current);
    settimer(timer + 1);
  }

  //   intervalRef2.current = setInterval(tick2, 1000);
  setInterval(tick2, 1000);

  return (
    <div>
      <p>Timer</p>
      <h1>{timer}</h1>
    </div>
  );
}
