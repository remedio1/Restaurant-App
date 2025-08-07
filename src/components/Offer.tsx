
import React from "react";
import Image from "next/image";
import CountDown from './Countdown';

export default function Offer() {
  return (
    <div className="bg-black h-screen flex flex-col xl:flex-row md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* Offer component content goes here */}
      <div className="flex-1 text-center justify-center items-center flex flex-col p-8 gap-3">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">Special Offer</h1>
        <p className="text-gray-400 mt-2 xl:text-xl">Get 50% off on your first purchase!</p>
        <CountDown />
        <button className="bg-red-500 px-4 rounded-md font-bold py-2 mt-4 text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">Peça agora</button>
      </div>
      {/* Placeholder for offer details */}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain"/>
      </div>
    </div>
  );
}
