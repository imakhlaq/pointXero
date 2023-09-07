"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { useCustomMutation } from "@/hooks/useCustomMutation";
import { useAppDispatch } from "@/store/hooks";
import { CartProduct } from "../../../../types";
import { addProduct } from "@/store/cart/cartSlice";

type Props = {
  prodId: string;
  versionId: string;
};

const BuyNowAddToCart = ({ prodId, versionId }: Props) => {
  const { mutate, isLoading, isError, error } = useCustomMutation<CartProduct>({
    path: "/user/updatecart",
    onError,
    onSuccess,
  });

  const dispatch = useAppDispatch();

  const notify = () =>
    toast.success("Added To Cart", {
      position: toast.POSITION.TOP_RIGHT,
    });

  function addToCartHandler(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.preventDefault();

    //adding to cart
    mutate({ prodId, versionId });
    notify();
  }

  function onSuccess(data: CartProduct) {
    dispatch(addProduct(data));
    console.log(data);
  }

  function onError(data: any) {
    console.log(data);
  }

  return (
    <>
      <button
        className="bg-greenColor w-full text-center px-4 py-1 rounded hover:bg-whiteText hover:text-black mt-3"
        onClick={addToCartHandler}
      >
        Add To Cart
      </button>

      <button className="bg-orange-400 w-full text-center px-4 py-1 rounded hover:bg-whiteText hover:text-black mt-3">
        Buy Now
      </button>
    </>
  );
};
export default BuyNowAddToCart;
