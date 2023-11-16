import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";
// import RegisterForm from "./components/RegisterForm/RegisterForm";

function App() {
  const [Open, setOpen] = useState(false);
  return (
    <div>
      <div className="open">
        <button onClick={() => setOpen(!Open)}> Sign Up</button>
      </div>

      <Modal open={Open} setOpen={setOpen} />
    </div>
  );
}

export default App;
