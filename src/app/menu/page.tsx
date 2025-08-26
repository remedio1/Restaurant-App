import { menu } from "@/itemsData";
import { Menu } from "@/types/types";
import Link from "next/link";
import React from "react";

const getData = async ( ) => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache:"no-store"
  })

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function MenuPage () {

  const menu: Menu = await getData();
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
            <button className={`hidden sm:block bg-${item.color} text-${item.color === "black" ? "white" : "red-500"} cursor-pointer rounded-md py-2 px-4 mt-6`}>Explore</button>
          </div>
        </Link>
      ))}
    </div>
  );
}
