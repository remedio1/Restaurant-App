"use client"

import React from 'react'
import Countdown from 'react-countdown';

const endingDate = new Date('2025-10-31');


export default function CountDown() {
  return (
    <Countdown className='font-bold text-5xl text-amber-400' date={endingDate}/>
  )
}
