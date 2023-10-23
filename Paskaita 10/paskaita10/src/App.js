import "./App.css";
import About from "./components/About/About";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Contacts from "./components/Contacts/Contacts";
import User from "./components/User/User";
import Login from "./components/Login/Login";

function App() {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
        <hr />
      </header>
      <Routes>
        {/* <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        
        <Route path="*" element={"Puslapis nerastas"} />
        <Route path="/user/:id" element={<User />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <footer>Cia yra Footeris</footer>
    </div>
  );
}

export default App;
