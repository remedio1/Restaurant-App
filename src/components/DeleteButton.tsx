"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import router, { useRouter } from "next/navigation";
import { use } from "react";
import { toast } from "react-toastify";

export default function deleteButton({ id }: { id: string }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated" || !session?.user.isAdmin) {
    return null;
  }

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      router.push("/menu");
      toast("Product deleted successfully");
    } else {
      const data = await res.json();
      toast.error("You are not authorized to perform this action");
    }
  };

  return (
    <button
      className="bg-red-400 p-2 rounded-full absolute top-4 right-4 cursor-pointer"
      onClick={handleDelete}
    >
      <Image src="/delete.png" alt="" width={20} height={20} />
    </button>
  );
}
