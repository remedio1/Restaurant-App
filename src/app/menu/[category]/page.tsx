import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ProductType } from "@/types/types";

const getData = async (category: string) => {
  const res = await fetch(
    `http://localhost:3000/api/products?cat=${category}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

type Props = {
  params: {
    category: string;
  };
};

export default async function CategoryPage({ params }: Props) {
  const pizzas: ProductType[] = await getData(params.category);
  return (
    <div className="flex flex-wrap">
      {pizzas.map((pizza) => (
        <Link
          href={`/product/${pizza.id}`}
          key={pizza.id}
          className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group even:bg-fuchsia-50"
        >
          {/* Image Container */}
          {pizza.img && (
            <div className="relative h-[80%]">
              <Image src={pizza.img} alt="" fill className="object-contain" />
            </div>
          )}
          {/* Text Container */}
          <div className="flex justify-between items-center font-bold text-red-400 group">
            <h1 className="text-xl">{pizza.title}</h1>
            <h2 className="text-xl group-hover:hidden">{pizza.price}</h2>
            <button className="hidden group-hover:block uppercase bg-red-500 rounded-md text-white p-2">
              Adicione ao carrinho
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}
