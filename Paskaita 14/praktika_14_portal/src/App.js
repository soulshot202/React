import "./App.css";
import ItemsList from "./components/ItemsList/ItemsList";
import { useState } from "react";
import Modal from "./components/Modal/Modal";

function App() {
  const [cart, setCart] = useState([]);
  const [Open, setOpen] = useState(true);
  function handleButtonClick() {
    setOpen((prev) => !prev);
  }

  return (
    <div>
      <div className="App">
        <ItemsList setCart={setCart} Cart={cart} />
        <Modal open={Open} cart={cart} setCart={setCart}>
          {cart.map((item) => (
            <p key={item.id}>
              Preke: {item.name} kaina: {item.price} kiekis: {item.quantity}{" "}
              suma: {item.quantity * item.price}
              <button
                onClick={() =>
                  setCart(() => cart.map((prev) => prev.id !== item.id))
                }>
                Pasalinti
              </button>
            </p>
          ))}
          <h6>Suma: {cart.reduce((a, b) => a + b.quantity * b.price, 0)}</h6>
        </Modal>
      </div>
      <button onClick={handleButtonClick}>Krepselis</button>
      <button onClick={() => setCart([])}>Valyti krepseli</button>
    </div>
  );
}

export default App;
