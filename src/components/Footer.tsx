import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className="flex justify-around gap-4 h-20 md:h-30 items-center text-red-500 text-center">
      <Link href="/" className="font-bold md:text-2xl">
      ARAUJO´S RESTAURANT
      </Link>
      <p className='text-sm md:text-base '>
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </div>
  )
}
