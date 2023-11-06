import React from "react";

export default function Label({ labelName }) {
  return <label htmlFor={labelName}>{labelName}</label>;
}
