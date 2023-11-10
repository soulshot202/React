import React, { useContext } from "react";
import { userContext } from "../../App";

export default function Address() {
  const { user, setUser } = useContext(userContext);
  console.log(user);

  function handleChange() {
    setUser((prev) => {
      const copy = { ...prev };
      copy.address.street = "Musu nauja gatve";
      return copy;
    });
  }

  return (
    <div>
      <h3>Address</h3>
      <p>
        {user.address?.city} {user.address?.street} {user.address?.suite}
      </p>
      <button onClick={handleChange}>Change user</button>
    </div>
  );
}
