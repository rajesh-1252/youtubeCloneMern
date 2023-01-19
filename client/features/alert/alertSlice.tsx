import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alertType: "",
  alertText: "",
};
export const alertSlice = createSlice({
  initialState,
  name: "alert",
  reducers: {
    createAlert: (state, action) => {},
  },
});

export default alertSlice.reducer;
