'use client'
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useCartStore } from "@/utils/store";

export default function CartIcon() {
  const {totalItems} = useCartStore();
  return (
    <Link href="/cart" className="flex items-center gap-2">
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <Image src="/cart.png" alt="" fill />
      </div>
      <span> Carrinho ({totalItems})</span>
    </Link>
  );
}
