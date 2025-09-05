import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const product = await prisma.product.findUnique({
      where: { id: id },
    });
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const session = await auth();

  if (session?.user.isAdmin) {
    try {
      await prisma.product.delete({
        where: { id: id },
      });
      return NextResponse.json({ message: "Product deleted successfully" }, { status: 200 });
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
  }
  return NextResponse.json(
    { error: "You are not authorized to perform this action" },
    { status: 403 }
  );
}
