import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";
import { auth } from "@/auth";
import { logout } from "@/utils/actions";

export default async function NavBar() {
  // Simulating user authentication status
  const session = await auth();
  return (
    <div className="h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-red-500 uppercase bg-white shadow-md md:h-20">
      <div className="hidden md:flex gap-4 flex-1">
        {/* Links */}
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contato</Link>
      </div>
      {/* Logo */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/" className="">
          Araujo´s Restaurant
        </Link>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>11 99450 5618</span>
        </div>
        {session?.user ? (
          <div className="gap-2">
          <Link href="/orders">Pedidos</Link>
          <form action={logout}>
            <button type="submit" className="cursor-pointer uppercase" >
              Logout
            </button>
          </form>
          </div>
        ) : (
          <Link href="/login">Login</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
}
