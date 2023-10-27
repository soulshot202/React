import React, { useState } from "react";
import styles from "./ItemsList.module.css";

export default function ItemsList({ setCart, Cart }) {
  const [quantity, setQuantity] = useState(1);
  const [quantity2, setQuantity2] = useState(1);
  return (
    <div className={styles.itemsList}>
      <div>
        <h2>Desra</h2>
        <p>Virta kalakutienos desra</p>
        <p>3.25</p>
        <p>
          kiekis: <br />{" "}
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </p>
        <button
          onClick={() => {
            setCart([
              ...Cart,
              {
                id: Cart.length + 1,
                price: 3.25,
                name: "virta kalakutienos desra",
                quantity: quantity,
                suma: quantity * 3.25,
              },
            ]);
            setQuantity(1);
          }}>
          Buy
        </button>
      </div>
      <div>
        <h2>Suris</h2>
        <p>Fermentinis suris</p>
        <p>8.50</p>
        <p>
          kiekis: <br />
          <input
            type="number"
            value={quantity2}
            onChange={(e) => setQuantity2(e.target.value)}
          />
        </p>
        <button
          onClick={() => {
            setCart([
              ...Cart,
              {
                id: Cart.length + 1,
                price: 8.5,
                name: "Fermetinis suris",
                quantity: quantity2,
                suma: quantity2 * 8.5,
              },
            ]);
            setQuantity2(1);
          }}>
          Buy
        </button>
      </div>
    </div>
  );
}
