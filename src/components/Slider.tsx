'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const data = [
    {
        id: 1,
        title: "Delicious Food",
        description: "Experience the best culinary delights with our exquisite menu.",
        image: "/slide1.png"
    },
    {
        id: 2,
        title: "Fresh Ingredients",
        description: "We use only the freshest ingredients to prepare our dishes.",
        image: "/slide2.png"
    },
    {
        id: 3,
        title: "Exceptional Service",
        description: "Our staff is dedicated to providing you with an unforgettable dining experience.",
        image: "/slide3.jpg"
    }
]

export default function Slider() {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);
    return () => clearInterval(interval);
        }, []);
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50'>
        {/*Text Container*/}
        <div className='h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold lg:h-full lg:w-1/2'>
    <h1 className='text-5xl text-center uppercase p-4 md:text-6xl xl:text-7xl'>
        {data[currentIndex].title}
    </h1>
    <button className='bg-red-500 text-white py-4 px-8 rounded-full hover:bg-red-600 transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer'>
        Peça agora
    </button>
        </div>
        {/*Image Container*/}
        <div className='w-full h-1/2 relative lg:h-full lg:w-1/2'>
        <Image src={data[currentIndex].image} alt="" fill className='object-cover'/>
        </div>
    </div>
  )
}
