"use client";
import { button } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BuyNowAddToCart = () => {
  const notify = () =>
    toast.success("Added To Cart", {
      position: toast.POSITION.TOP_RIGHT,
    });
  return (
    <>
      <button
        className="bg-greenColor w-full text-center px-4 py-1 rounded hover:bg-whiteText hover:text-black mt-3"
        onClick={notify}
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
