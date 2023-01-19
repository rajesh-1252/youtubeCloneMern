import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./features/alert/alertSlice";
import errorsReducer from "./features/errors/errorsSlice";
import registerReducer from "./features/register/registerSlice";

export const store = configureStore({
  reducer: {
    registerUser: registerReducer,
    displayError: errorsReducer,
    displayAlert: alertReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
