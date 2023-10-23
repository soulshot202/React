import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  function buttonHandler() {
    navigate("/contacts");
  }

  return (
    <div>
      Home
      <button onClick={buttonHandler}>Go to contacts</button>
    </div>
  );
}
