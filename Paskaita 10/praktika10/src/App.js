import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contacts from "./components/Contacts/Contacts";
import AboutUs from "./components/AboutUs/AboutUs";
import Services from "./components/Services/Services";
import News from "./components/News/News";
import Portfolio from "./components/Portfolio/Portfolio";

import { Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<News />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
