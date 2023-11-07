import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function handleButtonClick() {
    setIsModalOpen((prev) => !prev);
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Open Modal</button>
      <Modal
        isOpen={isModalOpen}
        title={"Kazkoks title"}
        onClose={() => setIsModalOpen(false)}>
        <h1>Hello</h1>
        <h2>World</h2>
        <h3>React</h3>
      </Modal>
    </div>
  );
}

export default App;
