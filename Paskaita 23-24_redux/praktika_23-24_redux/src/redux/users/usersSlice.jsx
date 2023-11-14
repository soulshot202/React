import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const initialState = {
  users: [],
  isLoading: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addUserAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addUserAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users.push(action.payload);
      })
      .addCase(addUserAsync.rejected, (state) => {
        state.isLoading = false;
        console.log("rejected");
      });
    builder
      .addCase(deleteUserAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUserAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = state.users.filter((user) => user.id !== action.payload);
      })
      .addCase(deleteUserAsync.rejected, (state) => {
        state.isLoading = false;
        console.log("rejected");
      });
    builder
      .addCase(getUsersAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUsersAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(getUsersAsync.rejected, (state, action) => {
        state.isLoading = false;
        console.log("rejected");
      });
  },
});

export const addUserAsync = createAsyncThunk("users/addUser", async (user) => {
  const response = await axios.post(USERS_URL, user);
  return response.data;
});

export const deleteUserAsync = createAsyncThunk(
  "users/deleteUser",
  async (id) => {
    await axios.delete(`${USERS_URL}/${id}`);
    return id;
  }
);

export const getUsersAsync = createAsyncThunk("users/getUsers", async () => {
  const response = await axios.get(USERS_URL);
  return response.data;
});

export default usersSlice.reducer;
