import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartProduct } from "../../../types";

const initialState = {} as CartProduct;

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<CartProduct>) {
      state = { ...action.payload };
    },
    removeProduct(state, action: PayloadAction<string>) {
      const productIndex = state.CartItem.findIndex(
        (item) => item.id === action.payload,
      );

      const product = state.CartItem[productIndex];

      if (productIndex === undefined) return;

      // @ts-ignore
      state.cartPrice -= +product.version.currentPrice;

      if (product.quantity === 1) {
        state.CartItem.splice(productIndex, 1);
      } else {
        state.CartItem[productIndex].quantity -= 1;
      }
    },
  },
});
export default cartSlice.reducer;
export const { addProduct, removeProduct } = cartSlice.actions;
