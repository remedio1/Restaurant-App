import CheckoutForm from "@/components/Checkout";



export default async function Pay( { params }: { params: { id: string } }) {
    const { id } = params;
    return (
        <div id = "checkout">
        <CheckoutForm id={id} />
        </div>
    )

}
