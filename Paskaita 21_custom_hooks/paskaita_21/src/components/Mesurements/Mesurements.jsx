import React from "react";
import { useWindowMeasurements } from "../../hooks/useWindowMeasurements";

export default function Mesurements() {
  const { width, height } = useWindowMeasurements();
  return (
    <div>
      <h1>Mesurements</h1>
      <p>Height: {height}</p>
      <p>Width: {width}</p>
    </div>
  );
}
