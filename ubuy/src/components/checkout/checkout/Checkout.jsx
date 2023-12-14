import { Elements } from "@stripe/react-stripe-js";
import "./Checkout.css";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../checkout-form/CheckoutForm";
import * as stripeService from "../../../core/services/stripeService";
import { parseError } from "../../../core/lib/errorParser";
import { SendErrorNotification } from "../../../core/notifications/notifications";
import { Route, useLocation } from "react-router-dom";
import CheckoutComplete from "../checkout-complete/CheckoutComplete";

const stripePromise = loadStripe(
  "pk_test_51OMtawBPikfn3zPt0OadIgIN1aPOwxFhaS1LO078ukhyOOBsd0rU4ZW6s4uuSTWHnpTbEyIo29OhFs6IlIgMgYQt00XbUyAj8h"
);

const getTheme = () => {
  const theme = localStorage.getItem("theme");
  if (!theme) {
    // Default theme is taken as dark-theme
    localStorage.setItem("theme", "dark");
    return "dark";
  } else {
    return theme;
  }
};

const Checkout = (data) => {
  const [clientSecret, setClientSecret] = useState("");
  const { state } = useLocation();

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
      .createPaymentIntent(state)
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
    theme: getTheme() == "dark" ? "stripe" : "night",
  };

  const options = {
    clientSecret,
    appearance,
  };

  console.log(state);

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm className="form-wrapper" cartItems={state} />
        </Elements>
      )}
    </div>
  );
};

export default Checkout;
