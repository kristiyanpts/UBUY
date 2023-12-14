import { Elements } from "@stripe/react-stripe-js";
import "./Checkout.css";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../checkout-form/CheckoutForm";
import * as stripeService from "../../../core/services/stripeService";
import { parseError } from "../../../core/lib/errorParser";
import { SendErrorNotification } from "../../../core/notifications/notifications";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51OMtawBPikfn3zPt0OadIgIN1aPOwxFhaS1LO078ukhyOOBsd0rU4ZW6s4uuSTWHnpTbEyIo29OhFs6IlIgMgYQt00XbUyAj8h"
);

const getTheme = () => {
  const theme = localStorage.getItem("theme");
  if (!theme) {
    localStorage.setItem("theme", "dark");
    return "dark";
  } else {
    return theme;
  }
};

const Checkout = () => {
  const [clientSecret, setClientSecret] = useState("");
  const { state } = useLocation();

  useEffect(() => {
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
    theme: getTheme() == "dark" ? "night" : "stripe",
  };

  const options = {
    clientSecret,
    appearance,
  };

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
