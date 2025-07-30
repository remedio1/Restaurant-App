import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className="flex justify-between px-20 h-12 md:h-20 p-4 lg:p-20 text-red-500">
      <Link href="/" className="font-bold text-xl">
      ARAUJO´S RESTAURANT
      </Link>
      <p>
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </div>
  )
}
