import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthResponse } from "../../../types";

type InitialSate = Required<AuthResponse>;

const initialState = {} as InitialSate | null;

const authSlice = createSlice({
  name: "authSlice",
  initialState,

  reducers: {
    setUser(state, action: PayloadAction<AuthResponse>) {},
    removeUser(state) {
      return null;
    },
  },
});

export default authSlice.reducer;
const { setUser, removeUser } = authSlice.actions;
