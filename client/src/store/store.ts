import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";

const store = configureStore({
  reducer: { auth: authReducer },
});
export default store;

export type AppDispatch = typeof store.dispatch; // Here we export the store's dispatch type
export type RootState = ReturnType<typeof store.getState>; // Here we export the store's state
