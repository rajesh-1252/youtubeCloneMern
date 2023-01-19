import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../register/registerSlice";
interface StateType {
  errorValue: string;
}
const initialState: StateType = {
  errorValue: "",
};

const errorsSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.rejected, (state, { payload }: any) => {
      console.log(payload);
      console.log();
      return {
        ...state,
        errorValue: payload.msg,
      };
    });
  },
});

export const selectErrors = (state: { errors: StateType }) => state.errors;

export default errorsSlice.reducer;
