"use client";
import React from "react";

type PriceProps = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

export default function Price(props: PriceProps) {
  const [total, setTotal] = React.useState(props.price);
  const [quantity, setQuantity] = React.useState(1);
  const [selected, setSelected] = React.useState(0);

  React.useEffect(() => {
    const optionPrice = props.options?.[selected]?.additionalPrice || 0;
    setTotal((props.price + optionPrice) * quantity);
  }, [props.price, props.options, selected, quantity]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>

      <div className="flex gap-4 font-bold ">
        {props.options?.map((option, index) => (
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
          <span className="text-red-500 font-bold">Quantity</span>
          <div className="flex items-center gap-2 text-xl">
            <button onClick={() => setQuantity(prev=>(prev > 1 ? prev - 1 : 1))
            } className="cursor-pointer">{"<"}</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(prev=>(prev + 1))} className="cursor-pointer">{">"}</button>
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
