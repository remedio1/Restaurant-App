import React from "react";
import { singleProduct } from "@/itemsData";
import Link from "next/link";
import Image from "next/image";
import Price from "@/components/Price";

export default function SingleProduct() {
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
      <div className="flex flex-col  w-full h-1/2 gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase md:text-5xl">
          {singleProduct.title}
        </h1>
        <p className="text-xl">{singleProduct.desc}</p>
        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
      </div>
    </div>
  );
}
