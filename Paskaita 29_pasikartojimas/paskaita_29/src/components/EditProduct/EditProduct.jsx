import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const endpoint = "http://localhost:3001/products";

export default function EditProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [expirationDate, setExpirationDate] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${endpoint}/${id}`).then(({ data }) => {
      console.log(data.expirationDate);
      setName(data.name);
      setPrice(data.price);
      setAmount(data.amount);
      setDescription(data.description);
      setExpirationDate(data.expirationDate.split("T")[0]);
    });
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put(`${endpoint}/${id}`, {
        name,
        price,
        amount,
        description,
        expirationDate,
      })
      .then(() => {
        navigate("/");
      })
      .catch(() => alert("Ivyko klaida"));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <label htmlFor="">Expiration date</label>
        <input
          type="date"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
        />
        <br />
        <button type="submit">Issaugoti</button>
      </form>
    </div>
  );
}
