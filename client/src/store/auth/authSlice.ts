import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialSate = {
  name: string;
  email: string;
};

const initialState = {} as InitialSate | null;

const authSlice = createSlice({
  name: "authSlice",
  initialState,

  reducers: {
    setUser() {},
    removeUser() {},
  },
});

export default authSlice.reducer;
const { setUser, removeUser } = authSlice.actions;
