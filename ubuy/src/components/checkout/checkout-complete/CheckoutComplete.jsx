import { Elements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./CheckoutComplete.css";

const stripePromise = loadStripe(
  "pk_test_51OMtawBPikfn3zPt0OadIgIN1aPOwxFhaS1LO078ukhyOOBsd0rU4ZW6s4uuSTWHnpTbEyIo29OhFs6IlIgMgYQt00XbUyAj8h"
);

const CheckoutComplete = (props) => (
  <Elements stripe={stripePromise}>
    <Wrapper {...props} />
  </Elements>
);

const Wrapper = () => {
  const navigate = useNavigate();

  return (
    <div className="complete-wrapper">
      <img
        src="https://condaluna.com/assets/stickers/thank-you-pling.gif"
        alt=""
      />
      <span>Your order has been placed!</span>
      <div className="controls">
        <button onClick={() => navigate("/")}>Track Order</button>
        <button onClick={() => navigate("/")}>Home Page</button>
      </div>
    </div>
  );
};

export default CheckoutComplete;
