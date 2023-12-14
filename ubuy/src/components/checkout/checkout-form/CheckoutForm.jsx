import "./CheckoutForm.css";

import { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
  AddressElement,
} from "@stripe/react-stripe-js";
import * as productService from "../../../core/services/productService";
import {
  SendErrorNotification,
  SendSuccessNotification,
} from "../../../core/notifications/notifications";
import { parseError } from "../../../core/lib/errorParser";

export default function CheckoutForm(data) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const cartItems = data.cartItems;
  const [cartPrice, setCartPrice] = useState(0);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
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
        return_url: "http://localhost:5173/checkout/complete",
      },
    });

    if (error) {
      if (error.type === "card_error" || error.type === "validation_error") {
        return setMessage(error.message);
      } else {
        return setMessage("An unexpected error occurred.");
      }
    } else {
      for (const product of cartItems) {
        if (product.quantityBuying) {
          product.quantity -= product.quantityBuying;
          delete product.quantityBuying;
        } else {
          product.quantity--;
        }
        try {
          await productService.buyProduct(product._id, {
            quantity: product.quantity,
          });
        } catch (error) {
          let errors = parseError(error);
          errors.forEach((err) => {
            SendErrorNotification(err);
          });
        }
        sessionStorage.removeItem("cart-items");
      }
    }

    setIsLoading(false);
  };

  function CalculateTotalPrice() {
    let totalPrice = 0;

    for (const item of cartItems) {
      totalPrice += item.price * (item.quantityBuying || 1);
    }

    setCartPrice(totalPrice);
  }

  useEffect(() => {
    CalculateTotalPrice();
  }, [cartItems]);

  const paymentElementOptions = {
    layout: {
      type: "accordion",
      defaultCollapsed: false,
      radios: true,
      spacedAccordionItems: false,
    },
  };

  const addressElementOptions = {
    mode: "shipping",
    fields: {
      phone: "always",
    },
    validation: {
      phone: {
        required: "always",
      },
    },
  };

  console.log(data);

  return (
    <div className="checkout-wrapper">
      <div className="order-wrapper">
        <div className="title">Order Summary</div>
        {cartItems.map((p) => (
          <div className="ordered-product" key={p._id}>
            <img src={p.imageURL} alt="" className="product-img" />
            <div className="ordered-product-info">
              <div className="name">{p.name}</div>
              <div className="ordered-info">
                Listed By: {p.owner.firstName} {p.owner.lastName}
              </div>
              <div className="ordered-info">
                Quantity Bought: {p.quantityBuying || 1}
              </div>
            </div>
          </div>
        ))}
        <div className="ordered-total-price">Total Price: ${cartPrice}</div>
      </div>
      <form id="payment-form" onSubmit={handleSubmit}>
        <div className="elem-wrapper">
          <div className="title">Shipping Information</div>
          <AddressElement options={addressElementOptions} />
        </div>
        <div className="elem-wrapper">
          <div className="title">Payment Method</div>
          <PaymentElement
            id="payment-element"
            options={paymentElementOptions}
          />
        </div>
        <button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          className="pay-now"
        >
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              `PAY NOW - $${cartPrice}`
            )}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
  );
}
