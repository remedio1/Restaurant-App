import React from 'react'
import Image from 'next/image'

export default function CartPage() {
  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row'>
      {/* Products Content */}
      <div className='h-1/2 p-4 flex flex-col lg:h-full lg:w-2/3 justify-center 2xl:w-1/2 lg:px-20 xl:px-40'>
        {/* List of products in the cart */}
        <div className='flex justify-between items-center mb-4 overflow-hidden '>
          <Image src="/temporary/p1.png" alt="Product" width={100} height={100} />
          <div>
          <h1 className='font-bold text-2xl'>Product 1</h1>
          <h2 className='text-xl'>Large</h2>
          </div>
          <p className='font-bold'>$10.00</p>
          <button className='cursor-pointer text-xl font-black'>X</button>
        </div>
      </div>
      {/* Payment Content */}
      <div className='h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6'>
      <div className='flex justify-between'>
        <h1>Payment</h1>
        <p>Total: $10.00</p>
        </div>
        <div className='flex justify-between'>
        <h1>Payment</h1>
        <p>Total: $10.00</p>
        </div>
        <div className='flex justify-between'>
        <h1>Payment</h1>
        <p>Total: $10.00</p>
        </div>
        <hr className='my-2'/>
        <div className='flex justify-between'>
        <h1>Payment</h1>
        <p>Total: $10.00</p>
        </div>
        <button className='self-end cursor-pointer text-xl w-1/2 py-3 bg-red-500 text-white rounded-md'>Checkout</button>
      </div>
    </div>
  )
}
