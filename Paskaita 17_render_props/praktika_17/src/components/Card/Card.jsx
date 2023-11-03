import React from "react";

export default function Card({ data }) {
  return (
    <article>
      {data.map((item) => (
        <div key={item.id}>
          <h4>ID: {item.id}</h4>
          <h5>
            Title: <p>{item.title}</p>
          </h5>
          <p>Body:</p>
          <p>
            <hr /> {item.body}
          </p>
        </div>
      ))}
    </article>
  );
}
