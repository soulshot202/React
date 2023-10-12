import React from "react";

export default function User({ name, city, street, phone }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{city}</p>
      <p>{street}</p>
      <p>{phone}</p>
      <hr />
    </div>
  );
}
