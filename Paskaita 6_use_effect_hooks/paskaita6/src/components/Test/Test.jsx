import React, { useEffect, useState } from "react";

export default function Test() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    console.log("Test");
  }, [count]);
  useEffect(() => {
    console.log("counter2");
  }, [count2]);
  return (
    <div>
      <h2>{count}</h2>
      <h2>{count2}</h2>
      <button onClick={() => setCount(count + 1)}>add one</button>
      <button onClick={() => setCount2(count2 + 1)}>add one</button>
    </div>
  );
}
