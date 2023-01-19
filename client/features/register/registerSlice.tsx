import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import userApi from "../../api/userApi";
interface StateType {
  isLoading: boolean;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  isMember: boolean;
  token: string;
}

const initialState: StateType = {
  isLoading: false,
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
  isMember: true,
  token: "",
};

export const registerUser = createAsyncThunk(
  "register/registerUser",
  async (payload: {}, { rejectWithValue }) => {
    try {
      const { data } = await userApi.post("api/v1/auth/register", payload);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    handleChange1: (state, { payload }) => {
      const { name, value } = payload;
      state[name as keyof Object] = value;
    },

    logFunc: (state) => {
      state.password = "adsf";
      console.log("hello im working");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      return {
        ...state,
        userName: payload.user.userName,
        email: payload.user.email,
        token: payload.token,
        isLoading: false,
      };
    });
    //builder.addCase(registerUser.rejected, (state, { payload }) => {
    //   console.log(payload);
    //   console.log();
    //   return {
    //     ...state,
    //   };
    // });
  },
});

export const getAllRegisterState = (state: { registerUser: StateType }) =>
  state.registerUser;

export const { logFunc, handleChange1 } = registerSlice.actions;
export default registerSlice.reducer;
