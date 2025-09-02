"use client";

import { ProductType } from "@/types/types";
import { useCartStore } from "@/utils/store";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Price({ product }: { product: ProductType }) {
  const [total, setTotal] = useState(product.price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  const { addToCart } = useCartStore();

  // Hook useEffect corrigido para lidar com todos os casos
  useEffect(() => {
    // Calcula o preço base + o preço da opção selecionada
    let pricePerItem = product.price;

    if (
      product.options?.length &&
      selected !== null &&
      product.options[selected]
    ) {
      pricePerItem += product.options[selected].additionalPrice;
    }

    // Calcula o total multiplicando o preço final por unidade pela quantidade
    setTotal(quantity * pricePerItem);
  }, [quantity, selected, product]);

  const handleCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      img: product.img,
      price: total,
      ...(product.options?.length && {
        optionTitle: product.options[selected].title,
      }),
      quantity: quantity,
    });
    toast.success("Produto adicionado ao carrinho!");
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Preço formatado para exibir sempre duas casas decimais */}
      <h2 className="text-2xl font-bold">${total}</h2>

      {/* OPTIONS CONTAINER */}
      <div className="flex gap-4 font-bold ">
        {product.options?.map((option, index) => (
          <button
            className="min-w-[6rem] p-2 ring-1 ring-red-500 rounded-md cursor-pointer"
            key={option.title}
            style={{
              background: selected === index ? "rgb(239 68 68)" : "white",
              color: selected === index ? "white" : "red",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>

      {/* QUANTITY AND ADD TO CART CONTAINER */}
      <div className="flex justify-between items-center gap-4">
        {/* QUANTITY */}
        <div className="flex justify-between items-center w-full ring-1 ring-red-500 rounded-md p-3">
          <span>Quantity</span>
          <div className="flex items-center gap-4">
            <button
              className="cursor-pointer"
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              className="cursor-pointer"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              {">"}
            </button>
          </div>
        </div>
        {/* CART BUTTON */}
        <button
          className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500 rounded-md cursor-pointer"
          onClick={handleCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
