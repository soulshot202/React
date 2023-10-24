import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Loading/Loading";
const NASA_HOST = process.env.REACT_APP_NASA_HOST;
const API_KEY = process.env.REACT_APP_API_KEY;
export default function Nasa() {
  const [data, setData] = useState({});
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(NASA_HOST, {
        params: {
          api_key: API_KEY,
          date,
        },
      })
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [date]);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <h4>{data.title}</h4>
          <img src={data.url} alt={data.title} />
          <p>{data.explanation}</p>
        </div>
      )}
      {/* <div>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <h4>{data.title}</h4>
        <img src={data.url} alt={data.title} />
        <p>{data.explanation}</p>
      </div> */}
    </div>
  );
}
