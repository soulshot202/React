import React, { useState } from "react";

export default function Counter({ startingValue = 0 }) {
  if (startingValue === null) {
    startingValue = 0;
  }
  const [Counter, setCounter] = useState(startingValue);

  return (
    <div>
      <h1 data-testid="counter">Counter: {Counter}</h1>
      <button onClick={() => setCounter(Counter + 1)}>Increment</button>
      <button onClick={() => setCounter(Counter - 1)}>Decrement</button>
      <button onClick={() => setCounter(startingValue)}>Reset</button>
    </div>
  );
}
