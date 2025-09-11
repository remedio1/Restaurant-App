import { auth } from "@/auth";
import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    if (session.user.isAdmin) {
      const orders = await prisma.order.findMany();
      return NextResponse.json(orders, { status: 200 });
    }
    const userEmail = session.user.email;
    if (!userEmail) {
      return NextResponse.json(
        { error: "User email not found" },
        { status: 400 }
      );
    }
    const orders = await prisma.order.findMany({
      where: {
        userEmail: userEmail,
      },
    });
    return NextResponse.json(orders, { status: 200 });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// // CREATE ORDER 
export async function POST(req: NextRequest) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json ({error: "Unauthorized"}, {status:401})
  }

  try {
    const body = await req.json();
    if (session.user) {
      const newOrder = await prisma.order.create({
        data: body
      });
        return NextResponse.json (newOrder, {status:201})
    }
    

  } catch (error) {
      console.error ("Error creating order:", error);
      return NextResponse.json ({error: "Internal Server Error"}, {status:500})
      
  }

}