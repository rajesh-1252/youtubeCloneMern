import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ChangeEvent } from "react";

const initialState = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
  isMember: true,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    changeInitialState: () => {},

    registerUser: (state, action) => {
      const postData = async () => {
        await axios.post("http://localhost/4000", state);
      };
      postData();
    },

    logFunc: () => {
      console.log("hello im working");
    },
  },
});
export const { registerUser, logFunc, changeInitialState } =
  registerSlice.actions;
export default registerSlice.reducer;
