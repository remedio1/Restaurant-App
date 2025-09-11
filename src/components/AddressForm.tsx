import { AddressElement } from "@stripe/react-stripe-js";
import { format } from "path";

export default function AddressForm() {
  return (
    <form action="">
      <h3>Address</h3>
      <AddressElement
        options={{ mode: "shipping" }}
        onChange={(e) => {
          if (e.complete) {
            const address = e.value.address;
          }
        }}
      />
    </form>
  );
}
