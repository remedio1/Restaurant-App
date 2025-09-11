import prisma from "@/utils/connect";
import { stripe } from "../../../../../../lib/stripe";

export async function POST(req: Request, { params }: { params: { orderId: string } }) {
  const { orderId } = params;

  const order = await prisma.order.findUnique({
    where: { id: orderId },
  });

  if (!order) {
    return Response.json({ error: "Order not found" }, { status: 404 });
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 100 * 100,
    currency: "usd",
    automatic_payment_methods: { enabled: true },
  });

  await prisma.order.update({
    where: { id: orderId },
    data: { intent_id: paymentIntent.id },
  });

  return Response.json({ clientSecret: paymentIntent.client_secret }, { status: 200 });
  console.log("orderId recebido:", orderId);

}

