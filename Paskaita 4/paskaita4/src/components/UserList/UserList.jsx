import React, { useState } from "react";
import axios from "axios";
import User from "../User/User";

export default function UserList() {
  const [users, setusers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getUsers() {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setusers(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <button onClick={getUsers}>Get Users</button>
      )}

      {users.length > 0 ? (
        users.map((user) => {
          return (
            <User
              city={user.address.city}
              name={user.name}
              phone={user.phone}
              street={user.address.street}
            />
          );
        })
      ) : (
        <h1>No users</h1>
      )}
    </div>
  );
}
