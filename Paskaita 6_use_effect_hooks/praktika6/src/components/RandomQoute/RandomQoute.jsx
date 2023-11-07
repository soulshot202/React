import React, { useState, useEffect } from "react";
import axios from "axios";

const ENDPOINT = "https://api.quotable.io/random";

export default function RandomQoute() {
  const [qoute, setQoute] = useState("");
  const [qouteAuthor, setQouteAuthor] = useState("");
  const [date, setDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchQoute = () => {
    setIsLoading(true);
    axios
      .get(ENDPOINT)
      .then(({ data }) => {
        setQoute(data.content);
        setQouteAuthor(data.author);
        setDate(data.dateAdded);
        setIsLoading(false);
      })

      .catch((error) => alert(error));
  };
  useEffect(fetchQoute, []);

  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          {" "}
          <h1>{qoute}</h1>
          <h4>{qouteAuthor}</h4>
          <p>{date}</p>
          <button onClick={fetchQoute}>Get New Qoute</button>
        </div>
      )}
    </div>
  );
}
