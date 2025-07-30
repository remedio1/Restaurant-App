"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, name: "Início", url: "/" },
  { id: 2, name: "Menu", url: "/menu" },
  { id: 3, name: "Contato", url: "/contact" },
  { id: 4, name: "Horas de trabalho", url: "/hours" },
  { id: 5, name: "Login", url: "/login" },
  { id: 6, name: "Carrinho", url: "/cart" },
];

export default function Menu() {
  const [open, setOpen] = useState(false);
  // Simulating user authentication status
  const user = false;
  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt="Menu Image"
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt="Menu Image"
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className="bg-red-500 text-white absolute left-0 top-30 w-full h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-3xl gap-4 z-10">
          {links.map((link) => (
            <Link href={link.url} key={link.id} onClick={() => setOpen(false)}>
              {link.name}
            </Link>
          ))}
          {!user ? (
            <Link href={"/login"} onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href={"/orders"} onClick={() => setOpen(false)}>
              Pedidos
            </Link>
          )}
          <Link href={"/cart"} onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
}
