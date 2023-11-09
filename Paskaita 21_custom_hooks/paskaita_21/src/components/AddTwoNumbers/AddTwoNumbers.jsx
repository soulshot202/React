import React, { useState } from "react";
import useAddnum from "../../hooks/useAddnum";

export default function AddTwoNumbers() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  //   const [sum, setSum] = useState(0);

  //   useEffect(() => {
  //     setSum(Number(firstNumber) + Number(secondNumber));
  //   }, [firstNumber, secondNumber]);
  const sum = useAddnum(firstNumber, secondNumber);
  return (
    <div>
      <input
        type="number"
        value={firstNumber}
        onChange={(e) => setFirstNumber(e.target.value)}></input>
      <br />
      <input
        type="number"
        value={secondNumber}
        onChange={(e) => setSecondNumber(e.target.value)}></input>
      <br />
      Sum: {sum}
    </div>
  );
}
