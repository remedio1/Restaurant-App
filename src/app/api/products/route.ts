import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await prisma.product.findMany();
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.log("Error fetching categories:", error);
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}
