import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Testas2() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setArr(res.data);
      //   console.log(res.data);
    });
  }, []);
  const usePagination = (data, itemsPerPage) => {
    const [currentPage, setCurrentPage] = useState(5);
    const [paginatedData, setPaginatedData] = useState([]);

    useEffect(() => {
      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;

      setPaginatedData(data.slice(start, end));
    }, [currentPage, data, itemsPerPage]);

    const handlePageChange = (page) => {
      setCurrentPage(page);
    };

    return {
      currentPage,
      paginatedData,
      handlePageChange,
    };
  };
  let pagination = usePagination(arr, 2);
  console.log(pagination);
  console.log(arr);

  return <div>Testas2</div>;
}
