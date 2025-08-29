import React from "react";


import Image from "next/image";
import Price from "@/components/Price";
import { ProductType } from "@/types/types";

const getData = async (id: string) => {
  const res = await fetch (`http://localhost:3000/api/products/${id}` , {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function SingleProduct({params} : {params: {id: string}}) {
    const singleProduct : ProductType = await getData(params.id);
  return (
    <div className=" p-4 flex flex-col items-center justify-around h-screen lg:px-20 text-red-500 md:flex-row md:gap-8 md:items-center">
      {/* IMAGE CONTAINER */}
      {singleProduct.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            className="object-contain"
            src={singleProduct.img}
            alt=""
            fill
          />
        </div>
      )}
      {/* TEXT CONTAINER */}
      <div className="flex flex-col h-1/2 gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase md:text-5xl">
          {singleProduct.title}
        </h1>
        <p className="text-xl">{singleProduct.desc}</p>
        <Price
          product={singleProduct}
        />
      </div>
    </div>
  );
}
