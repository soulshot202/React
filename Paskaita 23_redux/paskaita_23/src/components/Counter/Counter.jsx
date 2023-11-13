import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../redux/counter/counterSlice";

export default function Counter() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  console.log("counter", counter);
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button
        onClick={() => {
          dispatch(increment());
        }}>
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}>
        Decrement
      </button>
      <button onClick={() => dispatch(incrementByAmount(10))}>add 10</button>
    </div>
  );
}
