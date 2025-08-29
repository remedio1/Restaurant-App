"use client";
import { Product, ProductType } from "@/types/types";
import { useCartStore } from "@/utils/store";
import React, { use } from "react";

export default function Price({ product }: { product: ProductType }) {
  const [total, setTotal] = React.useState(product.price);
  const [quantity, setQuantity] = React.useState(1);
  const [selected, setSelected] = React.useState(0);

  const {} = useCartStore();

  React.useEffect(() => {
    if (product.options?.length) {
      setTotal(
        quantity * product.price + product.options[selected].additionalPrice
      )
    }
  }, [quantity, selected, product]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total}</h2>

      <div className="flex gap-4 font-bold ">
        {product.options?.map((option, index) => (
          <button
            className="min-w-[6rem] p-2 ring-1 ring-red-500 rounded-md cursor-pointer"
            key={option.title}
            style={{
              background: selected === index ? "rgba(239 113 113)" : "white",
              color: selected === index ? "white" : "red",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* quantity and add to cart CONTAINER */}
      <div className="flex gap-2 justify-between">
        {/*quantity */}
        <div className="flex justify-between items-center gap-2 w-full ring-1 ring-red-500 rounded-md p-2   ">
          <span className="text-red-500 font-bold w-50">Quantity</span>
          <div className="flex items-center gap-2 text-xl">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
              className="cursor-pointer"
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="cursor-pointer"
            >
              {">"}
            </button>
          </div>
        </div>
        {/*cart button */}
        <button className="uppercase bg-red-500 text-white rounded-md p-2 cursor-pointer">
          add to cart
        </button>
      </div>
    </div>
  );
}
