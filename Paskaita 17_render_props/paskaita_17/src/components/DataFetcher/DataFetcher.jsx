import React, { useEffect, useState } from "react";
import axios from "axios";
export default function DataFetcher({ render }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return <div>{render(data)}</div>;
}
