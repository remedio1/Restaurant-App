import React from 'react'

export default function OrdersPage() {
  return (
    <div className='p-4 lg:px-20 xl:px-40'>
      <table className='w-full border-separate border-spacing-2'>
        <thead>
          <tr className='text-left'>
            <th className='hidden md:block'>Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className='hidden md:block'>Products</th>
            <th>Status</th>
          </tr>
          </thead>
          <tbody>
            <tr className='text-sm md:text-base odd:bg-gray-100'>
              <td className='hidden md:block py-6 px-1'>12345</td>
              <td className='py-6 px-1'>2023-10-01</td>
              <td className='py-6 px-1'>$50.00</td>
              <td className='py-6 px-1'>Pizza, Salad</td>
              <td className='hidden md:block py-6 px-1'>Delivered</td>
            </tr>
            <tr className='text-sm md:text-base odd:bg-gray-100'>
              <td className='hidden md:block py-6 px-1'>12346</td>
              <td className='py-6 px-1'>2023-10-05</td>
              <td className='py-6 px-1'>$30.00</td>
              <td className='py-6 px-1'>Burger, Fries</td>
              <td className='hidden md:block py-6 px-1'>In Transit</td>
            </tr>
          </tbody>
        
      </table>
    </div>
  )
}
