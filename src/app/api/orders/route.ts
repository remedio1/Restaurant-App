import { auth } from "@/auth";
import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const session = await auth();
  const orders = await prisma.order.findMany();

  if (session) {
    try {
        if (session.user.isAdmin) {
          const orders = await prisma.order.findMany()
          return NextResponse.json(orders, { status: 200 });
      }
    } catch (error) {
      return NextResponse.json(
        { error: "Failed to fetch orders" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
