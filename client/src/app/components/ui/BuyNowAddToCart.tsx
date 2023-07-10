import { button } from "@material-tailwind/react";

const BuyNowAddToCart = () => {
  return (
    <>
      <button className="bg-greenColor w-full text-center px-4 py-1 rounded hover:bg-whiteText hover:text-black mt-3">
        Add To Cart
      </button>
      <button className="bg-orange-400 w-full text-center px-4 py-1 rounded hover:bg-whiteText hover:text-black mt-3">
        Buy Now
      </button>
    </>
  );
};
export default BuyNowAddToCart;
