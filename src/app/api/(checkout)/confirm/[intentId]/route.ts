import prisma from "@/utils/connect";

export const PUT = async (request: Request, { params }: { params: { intentId: string } }) => {
    const { intentId } = params;

    try {

        await prisma.order.update({
            where: {  intent_id: intentId },
            data: { status: 'Being Prepared' }
        })
        return Response.json('Order updated successfully', { status: 200 });
    }catch (error) {
        return Response.json('Internal Server Error', { status: 500 });
    }
}