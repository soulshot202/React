import React from "react";

export default function PostVer1({ data }) {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}
