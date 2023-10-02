import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthResponse } from "../../../types";

type InitialSate = {
  token: string | null;
  userName: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
};

const initialState = {} as InitialSate;

const authSlice = createSlice({
  name: "authSlice",
  initialState,

  reducers: {
    setUser(state, action: PayloadAction<AuthResponse>) {
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.userName = action.payload.userName;
      state.lastName = action.payload.lastName;
    },
    removeUser(state) {
      state.token = null;
      state.email = null;
      state.firstName = null;
      state.userName = null;
      state.lastName = null;
    },
  },
});

export default authSlice.reducer;
export const { setUser, removeUser } = authSlice.actions;
