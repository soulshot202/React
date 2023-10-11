import { useState } from "react";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import "./App.css";
import Button from "./components/Button/Button";
import Display from "./components/Display/Display";

function App() {
  const [number, setNumber] = useState(2);
  return (
    <div>
      <Button text={"add one"} onClick={() => setNumber((prev) => prev + 1)} />
      <Display number={number} />
      <Button
        text={"Subtract one"}
        onClick={() => setNumber((prev) => prev - 1)}
      />
      <ColorPicker />
    </div>
  );
}

export default App;
