import "./App.css";
import HoverableButton from "./components/HoverableButton/HoverableButton";
import { useRef, useState, useEffect, fireEvent } from "react";

function App() {
  const buttonRef = useRef(null);
  // const [className, setClassName] = useState("button");

  useEffect(() => {
    buttonRef.current.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "red";
    });
    buttonRef.current.addEventListener("mouseout", (e) => {
      e.target.style.backgroundColor = "";
    });
  }, [buttonRef]);
  return (
    <div>
      <HoverableButton text="Hover me" ref={buttonRef} className="button" />
      {/* {buttonRef.current.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "red";
      })} */}
    </div>
  );
}

export default App;
