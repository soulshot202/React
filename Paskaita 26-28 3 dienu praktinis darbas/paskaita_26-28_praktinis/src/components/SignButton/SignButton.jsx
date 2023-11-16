import React from "react";

export default function Button({ src, text, link, className, fa }) {
  return (
    <div className={className}>
      <img src={src} />

      <a href={link}>{text}</a>
    </div>
  );
}
