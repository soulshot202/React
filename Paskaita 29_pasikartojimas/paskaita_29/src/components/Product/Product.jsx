import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const endpoint = "http://localhost:3001/products";

export default function Product({ product, setProducts }) {
  const navigate = useNavigate();

  function handleDelete() {
    axios
      .delete(`${endpoint}/${product._id}`)
      .then(() => {
        setProducts((prev) => prev.filter((p) => p._id !== product._id));
      })
      .catch((err) => {
        console.log(err);
        alert("Nepavyko istrinti");
      });
  }

  function handleUpdate() {
    navigate(`/edit/${product._id}`);
  }

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.amount || "-"}</td>
      <td>{product.description || "-"}</td>
      <td>{product.expirationDate.split("T")[0] || "2025-01-01"}</td>
      <td>
        <button onClick={handleDelete}>Istrinti</button>
      </td>
      <td>
        <button onClick={handleUpdate}>Atnaujinti</button>
      </td>
    </tr>
  );
}
