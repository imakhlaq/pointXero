import { CategoryProduct } from "../../../../types";
import BuyNowAddToCart from "@/app/components/ui/BuyNowAddToCart";

type Props = {
  data: CategoryProduct;
};
const Item = ({ data }: Props) => {
  // @ts-ignore
  const discount =
    // @ts-ignore
    ((data.versions[0].marketPrice - data.versions[0].currentPrice) /
      // @ts-ignore
      data.versions[0].marketPrice) *
    100;

  return (
    <div className="bg-blueBgColor p-3 rounded">
      <img
        alt={data.title}
        src={data.image[0].url}
        className="max-w-[13rem] md:max-w-[15rem] rounded"
      />
      <h3>{data.title}</h3>
      <p>{discount.toFixed(0)}% off</p>
      <p>{data.versions[0].currentPrice}</p>
      <p>{data.versions[0].marketPrice}</p>
      <BuyNowAddToCart />
    </div>
  );
};
export default Item;
