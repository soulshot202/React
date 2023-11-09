import React from "react";
import { usePagination } from "../../hooks/usePagination";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Testas() {
  const [data, setData] = useState([]);
  const endPoint = "https://jsonplaceholder.typicode.com/posts";

  async function fetchData() {
    const res = await axios.get(endPoint);
    setData(res.data);
  }
  let pagination = usePagination(data, 2);
  console.log(pagination);

  useEffect(() => {
    fetchData();
  }, []);

  return <div>Testas</div>;
}
