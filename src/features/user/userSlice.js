import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const getLocalUser = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};

const initialState = {
  user: getLocalUser(),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload };

      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      toast.success("Logged out successfully!");
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
