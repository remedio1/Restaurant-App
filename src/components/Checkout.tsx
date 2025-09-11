"use client";

import { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import AddressForm from "./AddressForm";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
if (!stripePublishableKey) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
}
const stripePromise = loadStripe(stripePublishableKey);

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/success",
      },
    });

    // This point will only be reached if there is an immediate error when
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message ?? "An unknown error occurred.");
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "accordion" as const,
  };

  return (
    <div className="w-full max-w-md mx-auto
    ">
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <AddressForm />
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
    </div>
  );
}

export default function CheckoutForm({ id }: { id: string }) {
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    if(!id) return;
    // A função de fetch deve estar dentro do useEffect
    const makeRequest = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/create-intent/${id}`, {
          // URL relativa é melhor
          method: "POST",
        });
        if (!res.ok) {
          throw new Error("Failed to create PaymentIntent");
        }
        const data = await res.json();
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.error("Error during payment intent creation:", error);
      }
    };
    makeRequest();
  }, [id]);
  const appearance = {
    theme: "stripe" as const,
  };
  const options: StripeElementsOptions = {
    appearance,
    clientSecret,
  };
  return (
    clientSecret && (
    <Elements stripe={stripePromise} options={options}>
      <PaymentForm />
    </Elements>
    )
  );
}
