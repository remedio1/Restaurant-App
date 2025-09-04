"use client";
import dynamic from "next/dynamic";

import React from "react";

const Countdown = dynamic(() => import("react-countdown"), { ssr: false });

const endingDate = new Date("2025-10-31");

export default function CountDown() {
  return (
    <Countdown
      className="font-bold text-5xl text-amber-400"
      date={endingDate}
    />
  );
}
