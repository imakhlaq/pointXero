import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthResponse } from "../../../types";

type InitialSate = Required<AuthResponse>;

const initialState = {} as InitialSate | null;

const authSlice = createSlice({
  name: "authSlice",
  initialState,

  reducers: {
    setUser(state, action: PayloadAction<AuthResponse>) {
      state = action.payload;
    },
    removeUser(state) {
      state = null;
    },
  },
});

export default authSlice.reducer;
export const { setUser, removeUser } = authSlice.actions;
