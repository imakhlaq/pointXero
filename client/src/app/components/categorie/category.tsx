"use client";
import Link from "next/link";
import Item from "@/app/components/ui/Item";
import { ScrollContainer } from "react-indiana-drag-scroll";
import { Suspense, useEffect, useState } from "react";
import { getProductByCategory } from "@/utils/getProductByCategory";
import { CategoryProduct } from "../../../../types";

type Props = {
  title: string;
};
const Category = ({ title }: Props) => {
  const [products, setProducts] = useState<CategoryProduct[]>([]);

  useEffect(() => {
    const data: Promise<CategoryProduct[]> = getProductByCategory(title);
    data.then((d) => setProducts(d)).catch((e) => console.log(e));
  }, []);

  return (
    <section className="space-y-2 mb-9 ">
      <div className="flex justify-between px-5 md:px-11 lg:px-36 ">
        <h3 className="text-xl">{title}</h3>
        <Link
          className="bg-whiteText px-4 py-1 text-black font-semibold rounded text-center"
          href={`/search/${title}`}
        >
          More
        </Link>
      </div>
      <Suspense fallback={<p>Loading..</p>}>
        <ScrollContainer className="flex gap-6 overflow-x-auto items-center mx-10 lg:mx-28 no-scrollbar">
          {products.map((data) => (
            <Item key={data.id} data={data} />
          ))}
        </ScrollContainer>
      </Suspense>
    </section>
  );
};
export default Category;
