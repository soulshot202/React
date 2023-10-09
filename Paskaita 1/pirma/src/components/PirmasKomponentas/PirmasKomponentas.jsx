import React from "react";
import AntrasKomponentas from "../AntrasKomponentas/AntrasKomponentas";

export default function PirmasKomponentas() {
  const age = 20;
  function handleClick() {
    console.log("Paspaudei mane");
  }
  return (
    <div>
      <h1>Labas {age + 11}</h1>
      <AntrasKomponentas />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
