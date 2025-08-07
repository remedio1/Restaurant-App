import Slider from '@/components/Slider'
import Features from '@/components/Features'
import Offer from '@/components/Offer'
import React from 'react'




export default function Home() {
  return (
    <main className='scroll-smooth overflow-x-hidden'>
        <Slider/>
        <Features/>
        <Offer/>
    </main>
  )
}
