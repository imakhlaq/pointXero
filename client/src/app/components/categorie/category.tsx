"use client";
import Link from "next/link";
import Item from "@/app/components/ui/Item";
import { ScrollContainer } from "react-indiana-drag-scroll";
import { Suspense, useEffect, useState } from "react";
import { getProductByCategory } from "@/utils/getProductByCategory";
import { CategoryProduct } from "../../../../types";
import { useCustomQuery } from "@/hooks/useCustomQuerry";
import { UseQueryResult } from "react-query";

type Props = {
  category: string;
};
const Category = ({ category }: Props) => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useCustomQuery<CategoryProduct[]>({
    path: `/product/bycategory/${category.toLowerCase()}?page=1&limit=10`,
    keys: ["product", category],
  });

  return (
    <section className="space-y-2 mb-9 ">
      <div className="flex justify-between px-5 md:px-11 lg:px-36 ">
        <h3 className="text-xl">{category}</h3>
        <Link
          className="bg-whiteText px-4 py-1 text-black font-semibold rounded text-center"
          href={`/search/${category}`}
        >
          More
        </Link>
      </div>
      <Suspense fallback={<p>Loading..</p>}>
        <ScrollContainer className="flex gap-6 overflow-x-auto items-center mx-10 lg:mx-28 no-scrollbar">
          {products?.map((data: CategoryProduct) => (
            <Item key={data.id} data={data} />
          ))}
        </ScrollContainer>
      </Suspense>
    </section>
  );
};
export default Category;
