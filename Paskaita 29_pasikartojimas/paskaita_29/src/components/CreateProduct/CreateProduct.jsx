import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./CreateProduct.module.css";
import { useNavigate } from "react-router-dom";

const endpoint = "http://localhost:3001/products";

export default function CreateProduct() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [expirationDate, setExpirationDate] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!expirationDate) {
      setExpirationDate("2025-01-01");
    }
    if (!amount) {
      setAmount(0);
    }
    if (!description) {
      setDescription("nera aprasymo");
    }
    const { data } = await axios
      .post(endpoint, {
        name,
        price,
        amount,
        description,
        expirationDate,
      })
      .catch((err) => {
        alert("Ivyko klaida");
        console.log(err);
      });
    console.log(data);
    navigate("/");
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="price">Price:</label>
      <input
        type="number"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <label htmlFor="description">Description:</label>
      {/* <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}></input> */}
      <textarea
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}></textarea>
      <label htmlFor="expirationDate">Expiration date:</label>
      <input
        type="date"
        id="expirationDate"
        value={expirationDate}
        onChange={(e) => setExpirationDate(e.target.value)}
      />

      <button type="submit">Create</button>
    </form>
  );
}
