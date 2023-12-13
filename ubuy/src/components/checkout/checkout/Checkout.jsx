import { Elements } from "@stripe/react-stripe-js";
import "./Checkout.css";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../checkout-form/CheckoutForm";
import * as stripeService from "../../../core/services/stripeService";
import { parseError } from "../../../core/lib/errorParser";
import { SendErrorNotification } from "../../../core/notifications/notifications";

const stripePromise = loadStripe(
  "pk_live_51OMtawBPikfn3zPtDZHZO4xIfLyFv3AQhwBD3eDk26DrZY03Zk0bJkQhcReVDO52jZvixe2c4CCVkPpEQ1jYa7kT00qECgZ764"
);

const Checkout = () => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    // fetch("/create-payment-intent", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => setClientSecret(data.clientSecret));

    stripeService
      .createPaymentIntent()
      .then((result) => {
        setClientSecret(result.clientSecret);
      })
      .catch((error) => {
        let errors = parseError(error);

        errors.forEach((err) => {
          SendErrorNotification(err);
        });
      });
  }, []);

  const appearance = {
    theme: "night",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Checkout;
