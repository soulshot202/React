import React, { useState, useRef } from "react";
import "./DigitalClock.module.css";

export default function DigitalClock() {
  const clock = new Date().toLocaleTimeString();
  const [time, setTime] = useState(clock);

  const intervalRef = useRef();

  function tick() {
    setTime(new Date());
  }

  intervalRef.current = setInterval(() => setTime(new Date()), 1000);
  // setInterval(tick, 1000);
  return (
    <div>
      <h4>Current time is:</h4>
      <h4>{clock}</h4>
      <button
        onClick={() => {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          } else {
            intervalRef.current = setInterval(() => {
              setTime(new Date());
            }, 1000);
          }
        }}>
        Stop
      </button>
    </div>
  );
}
