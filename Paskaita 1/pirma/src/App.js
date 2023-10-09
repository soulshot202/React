import logo from "./logo.svg";
import "./App.css";
import PirmasKomponentas from "./components/PirmasKomponentas/PirmasKomponentas";
import AntrasKomponentas from "./components/AntrasKomponentas/AntrasKomponentas";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PirmasKomponentas />
        <img src={logo} className="App-logo" alt="logo" />

        <AntrasKomponentas />
        <h1>Labas</h1>
        <PirmasKomponentas />
      </header>
    </div>
  );
}

export default App;
