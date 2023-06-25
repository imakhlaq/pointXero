import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialSate = {
  product: CartProduct[];
  totalPrice: number;
};

const initialState = {} as InitialSate;

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addProduct(state, productData: PayloadAction<CartProduct>) {},
    removeProduct(state, id: PayloadAction<number>) {},
  },
});
