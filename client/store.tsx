import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./features/register/registerSlice";

export const store = configureStore({
  reducer: {
    registerUser: registerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
