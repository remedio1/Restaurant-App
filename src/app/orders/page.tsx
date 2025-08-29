"use client";
import { OrderType } from "@/types/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function OrdersPage() {
  const { data: session, status } = useSession();

  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch("http://localhost:3000/api/orders").then((res) => res.json()),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (order: { id: string; status: string }) =>
      fetch(`http://localhost:3000/api/orders/${order.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order.status),
      }),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      console.log("Order updated");
    },
  });

  const handleUpdate = async (
    e: React.FormEvent<HTMLFormElement>,
    id: string
  ) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    const status = input.value;
    mutation.mutate({ id, status });
    toast.success("Order status updated")
  };

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  if (isPending || status === "loading") {
    return <span>Loading...</span>;
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
            <tr className={`${order.status !== "delivered" && "bg-red-50"}`} key={order.id}>
              <td className="hidden md:block py-6 px-1">{order.id}</td>
              <td className="py-6 px-1">
                {order.createdAt.toString().slice(0, 10)}
              </td>
              <td className="py-6 px-1">{order.price}</td>
              <td className="py-6 px-1"></td>
              {session?.user.isAdmin ? (
                <td>
                  <form
                    action=""
                    className="flex items-center justify-center gap-4"
                    onSubmit={(e) => handleUpdate(e, order.id)}
                  >
                    <input
                      placeholder={order.status}
                      className="p-2 ring-1 ring-red-100 rounded-md"
                      type="text"
                    />
                    <button className="bg-red-500 p-2 rounded-full cursor-pointer">
                      <Image
                        src="/edit.png"
                        alt=""
                        width={20}
                        height={20}
                      ></Image>
                    </button>
                  </form>
                </td>
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
