import { CategoryProduct } from "../../../../types";
import BuyNowAddToCart from "@/app/components/ui/BuyNowAddToCart";
import Link from "next/link";

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

  const title = data.title.slice(0, 40);
  const containMore = title.length < data.title.length;

  return (
    <div className="bg-blueBgColor p-3 rounded relative">
      <Link href={`/product/${data.id}`}>
        <img
          alt={data.title}
          src={data.image[0].url}
          className="min-w-[15rem] min-h-[16rem] md:max-h-[15rem] rounded max-w-[15rem]"
        />

        <h3 className="mt-2 md:mt-4 text-lg md:text-lg mb-2">
          {`${title}${containMore && "..."}`}
        </h3>
        <div className="flex items-center gap-2">
          <p className="text-sm">
            ₹
            <span className="text-lg md:text-2xl">
              {data.versions[0].currentPrice}
            </span>
          </p>
          <p className="line-through text-sm self-end text-gray">
            M.R.P: {data.versions[0].marketPrice}
          </p>
          <p className=" text-sm self-end">({discount.toFixed(0)}% off)</p>
        </div>
      </Link>
      <BuyNowAddToCart />
    </div>
  );
};
export default Item;
