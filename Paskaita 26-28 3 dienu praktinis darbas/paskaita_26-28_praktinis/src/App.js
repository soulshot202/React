import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";
// import RegisterForm from "./components/RegisterForm/RegisterForm";

function App() {
  const [Open, setOpen] = useState(false);
  // const [Name, setName] = useState("");
  // const [Email, setEmail] = useState("");
  // const [Password, setPassword] = useState("");
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if (!Name || !Email || !Password) {
  //     return alert("Fill in all the fields");
  //   }
  //   alert("registration success");
  // }
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
