import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Fetcher({ render }) {
  const [duomenys, setDuomenys] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setDuomenys(data);
        setLoading(false);
      });
  }, []);

  return <div>{isLoading ? <p>Loading...</p> : render(duomenys)}</div>;
}
