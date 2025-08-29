"use client";
import React, { use } from "react";
import Image from "next/image";
import { useCartStore } from "@/utils/store";

export default function CartPage() {
  const { products, totalItems, totalPrice, removeFromCart } = useCartStore();
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      {/* Products Content */}
      <div className="h-1/2 p-4 flex flex-col lg:h-full lg:w-2/3 justify-center 2xl:w-1/2 lg:px-20 xl:px-40">
        {/* List of products in the cart */}
        {products.map((product) => (
          <div
            className="flex justify-between items-center mb-4 overflow-hidden "
            key={product.id}
          >
            {product.img && (
              <Image src={product.img} alt="Product" width={100} height={100} />
            )}
            <div>
              <h1 className="font-bold text-2xl">{product.title}</h1>
              <h2 className="text-xl">{product.optionTitle}</h2>
            </div>
            <p className="font-bold">${product.price}</p>
            <button className="cursor-pointer text-xl font-black" onClick={() => removeFromCart(product)}>X</button>
          </div>
        ))}
      </div>
      {/* Payment Content */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <h1>Subtotal ({totalItems} items)</h1>
          <p>${totalPrice}</p>
        </div>
        <div className="flex justify-between">
          <h1>Service Cost</h1>
          <p>$0.00</p>
        </div>
        <div className="flex justify-between">
          <h1>Delivery Cost</h1>
          <p className="font-bold text-green-500">FREE!</p>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <h1>Payment</h1>
          <p>Total: ${totalPrice}</p>
        </div>
        <button className="self-end cursor-pointer text-xl w-1/2 py-3 bg-red-500 text-white rounded-md">
          Checkout
        </button>
      </div>
    </div>
  );
}
