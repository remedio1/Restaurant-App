import React from "react";
import Image from "next/image";
import { ProductType } from "@/types/types";


const getData = async ( ) => {
  const res = await fetch("http://localhost:3000/api/products", {
    cache:"no-store"
  })

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Features () {
  const featuredProducts: ProductType[] = await getData();         
  return (
    <div className="w-screen text-red-500 overflow-x-scroll">
      {/* WRAPPER*/}
      <div className="w-max flex">
        {/* SINGLE ITEM*/}
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] lg:w-[33vw] xl:w-[25vw] xl:h-[90vh] relative cursor-pointer "
          >
            {/* IMAGE CONTAINER*/}
            {product.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500 lg:h-full">
                <Image
                  src={product.img}
                  alt=""
                  fill
                  className="object-contain "
                />
              </div>
            )}
            {/* TEXT CONTAINER*/}
            <div className="flex-1 flex flex-col gap-4 justify-center items-center text-center">
              <h1 className="text-2xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {product.title}
              </h1>
              <p className="p-4">{product.desc}</p>
              <span className="text-xl font-bold">${product.price}</span>
              <button className="bg-red-500 text-white rounded-md p-2 cursor-pointer">
                Peça Agora
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
