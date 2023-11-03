import React from "react";

export default function DataList({ data }) {
  return (
    <div>
      <h3>DataList</h3>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id} <span>{item.title}</span>
            <br />
            {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
