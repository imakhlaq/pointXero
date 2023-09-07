"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

type Props = {};

const CartPage = (props: Props) => {
  const cartData = useAppSelector((state) => state.cart);

  console.log(cartData);
  return <div>CartPage</div>;
};
export default CartPage;
