import { Elements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

const CheckoutComplete = () => {
  const stripe = useStripe();
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Success! Payment received.");
          break;
        case "processing":
          setMessage(
            "Payment processing. We'll update you when payment is received."
          );
          break;
        case "requires_payment_method":
          setMessage("Payment failed. Please try another payment method.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}></Elements>
      )}
    </div>
  );
};

export default CheckoutComplete;
