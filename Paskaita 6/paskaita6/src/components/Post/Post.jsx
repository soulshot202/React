import React from "react";

export default function Post({ body, title }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}
