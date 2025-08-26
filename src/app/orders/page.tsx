"use client";
import { auth } from "@/auth";
import { OrderType } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react"

import React from "react";

export default function OrdersPage() {
  const { data: session } = useSession();
  
    const { isPending, isError, data, error } = useQuery({
      queryKey: ["orders"],
      queryFn: () =>
        fetch("http://localhost:3000/api/orders").then((res) => res.json()),
    });

    if (isPending) {
      return <span>Loading...</span>;
    }

    if (isError) {
      return <span>Error: {error.message}</span>;
    }

    
    

    return (
      <div className="p-4 lg:px-20 xl:px-40">
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr className="text-left">
              <th className="hidden md:block">Order ID</th>
              <th>Date</th>
              <th>Price</th>
              <th className="hidden md:block">Products</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((order: OrderType) => (
              <tr
                className="text-sm md:text-base odd:bg-gray-100"
                key={order.id}
              >
                <td className="hidden md:block py-6 px-1">{order.id}</td>
                <td className="py-6 px-1">{order.createdAt.toString().slice(0, 10)}</td>
                <td className="py-6 px-1">{order.price}</td>
                <td className="py-6 px-1">{order.products[0].title}</td>
                {session?.user.isAdmin ? (
                  <input/>
                ) : (
                  <td className="hidden md:block py-6 px-1">{order.status}</td>
                )}
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }



