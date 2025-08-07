import { menu } from "@/itemsData";
import Link from "next/link";
import React from "react";

export default function MenuPage() {
  return (
    <div className="p-4 h-[calc(100vh-6rem))] md:h-[calc(100vh-9rem)] lg:px-20 flex flex-col md:flex-row items-center">
      {menu.map((item) => (
        <Link
          href={`/menu/${item.slug}`}
          key={item.id}
          className="w-full h-1/3 bg-cover p-8 md:h-1/2 "
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <div className={`text-${item.color} w-1/2`}>
            <h1 className="text-3xl font-bold uppercase ">{item.title}</h1>
            <p className="text-sm my-4">{item.desc}</p>
            <button className={`hidden sm:block bg-${item.color} text-${item.color === "black" ? "white" : "red-500"} rounded-md py-2 px-4 mt-6`}>Explore</button>
          </div>
        </Link>
      ))}
    </div>
  );
}
