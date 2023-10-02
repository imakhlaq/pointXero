"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

type Props = {};

const CartPage = (props: Props) => {
  const cartData = useAppSelector((state) => state.cart);

  console.log(cartData);
  return <section>CartPage</section>;
};
export default CartPage;
