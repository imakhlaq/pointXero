import { createSlice } from '@reduxjs/toolkit';

type CartItem = {
  id: String;
  title: String;
  price: Number;
  description: String;
  qty: Number;
};

type InitialState = {
  cartItems: CartItem[];
};
const initialState = {} as InitialState;

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {},
  extraReducers: {},
});

export const cartReducer = cartSlice.reducer;

// export const {} =cartSlice.actions
