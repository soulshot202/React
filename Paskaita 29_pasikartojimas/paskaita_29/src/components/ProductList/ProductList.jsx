import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../Product/Product";
import styles from "./ProductList.module.css";

const endpoint = "http://localhost:3001/products";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(endpoint)
      .then(({ data }) => setProducts(data))
      .catch(() => alert("Klaida"));
  }, []);

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Kaina</th>
            <th>Kiekis</th>
            <th>Aprasymas</th>
            <th>Galiojimo laikas</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <Product
                setProducts={setProducts}
                product={product}
                key={product._id}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
