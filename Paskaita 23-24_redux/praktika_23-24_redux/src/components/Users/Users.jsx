import React, { useState } from "react";
import { useSelector } from "react-redux";
import { addUserAsync, deleteUserAsync } from "../../redux/users/usersSlice";
import { useDispatch } from "react-redux";

export default function Users() {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState("");
  const users = useSelector((state) => state.users);
  const isLoading = useSelector((state) => state.users.isLoading);

  return (
    <div>
      <h1>Users</h1>
      <input
        type="text"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(addUserAsync({ name: newUser, id: Date.now() }));
          setNewUser("");
        }}>
        Add
      </button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.users.map((user) => (
            <li key={user.id}>
              {user.name}{" "}
              <button
                onClick={() => {
                  dispatch(deleteUserAsync(user.id));
                }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
