import { useMemo, useCallback, useState, useEffect } from "react";
import "./App.css";
import PicturesList from "./components/PicturesList/PicturesList";

function App() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(1);

  const chashedValue = useMemo(() => {
    let x = 0;
    for (let i = 0; i < 999999999; i++) {
      x++;
    }
    return x + number2;
  }, [number2]);
  const cashedFunction = useCallback(() => {
    console.log("cashedFunction");
  }, []);

  const notCashedFunction = () => {
    console.log("notCashedFunction");
  };

  useEffect(() => {
    notCashedFunction();

    console.log("useEffect");
  }, [notCashedFunction, number]);

  cashedFunction();

  return (
    <div>
      <PicturesList />
      {chashedValue}
      <button onClick={() => setNumber((prev) => ++prev)}>Calculate</button>
      <button onClick={() => setNumber2((prev) => ++prev)}>
        This makes recalculations
      </button>
      {number2}
      {number}
    </div>
  );
}

export default App;
