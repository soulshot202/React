import "./App.css";
import { useState } from "react";
import UserList from "./components/UserList/UserList";

function App() {
  // const [isRendering, setIsRendering] = useState(false);

  return (
    <div>
      {/* {isRendering ? <h1>Labas</h1> : <h1>Viso gero</h1>}
      {[<h1>Pirmas elementas</h1>, <h2>Antras elementas</h2>]}

      <button onClick={() => setIsRendering((prev) => !prev)}>Toogle</button> */}
      <UserList />
    </div>
  );
}

export default App;
