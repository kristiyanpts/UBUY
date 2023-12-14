import { useNavigate } from "react-router-dom";
import "./Cart.css";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import * as productService from "../../../core/services/productService";
import {
  SendErrorNotification,
  SendSuccessNotification,
} from "../../../core/notifications/notifications";
import { parseError } from "../../../core/lib/errorParser";

const Cart = () => {
  let navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [cartPrice, setCartPrice] = useState(0);

  function CalculateTotalPrice() {
    let totalPrice = 0;

    for (const item of cartItems) {
      totalPrice += item.price * (item.quantityBuying || 1);
    }

    setCartPrice(totalPrice);
  }

  useEffect(() => {
    let cartItems = JSON.parse(sessionStorage.getItem("cart-items") || "[]");

    for (const productId of cartItems) {
      productService
        .getProductById(productId)
        .then((product) => setCartItems((state) => [...state, product]));
    }
  }, []);

  useEffect(() => {
    CalculateTotalPrice();
  }, [cartItems]);

  // const PlaceOrder = async () => {
  //   for (const product of cartItems) {
  //     if (product.quantityBuying) {
  //       product.quantity -= product.quantityBuying;
  //       delete product.quantityBuying;
  //     } else {
  //       product.quantity--;
  //     }
  //     try {
  //       await productService.buyProduct(product._id, {
  //         quantity: product.quantity,
  //       });

  //       sessionStorage.removeItem("cart-items");
  //       setCartItems([]);

  //       SendSuccessNotification(
  //         `Your order for product "${product.name}" has been placed!`
  //       );
  //     } catch (error) {
  //       let errors = parseError(error);

  //       errors.forEach((err) => {
  //         SendErrorNotification(err);
  //       });
  //     }
  //   }
  // };

  const ClearCart = () => {
    sessionStorage.removeItem("cart-items");
    setCartItems([]);
  };

  function RemoveQuantity(productId) {
    const newQuantity = cartItems.map((product) => {
      if (product._id == productId) {
        let updateProduct = {
          ...product,
        };
        if (!product.quantityBuying) updateProduct.quantityBuying = 1;
        if (updateProduct.quantityBuying <= 1) {
          SendErrorNotification("Quantity can not be less than 1");
          return false;
        } else {
          updateProduct.quantityBuying--;
          return updateProduct;
        }
      }

      return product;
    });

    if (!newQuantity.includes(false)) {
      setCartItems(newQuantity);
      CalculateTotalPrice();
    }
  }

  function AddQuantity(productId) {
    const newQuantity = cartItems.map((product) => {
      if (product._id == productId) {
        let updateProduct = {
          ...product,
        };
        if (!product.quantityBuying) updateProduct.quantityBuying = 1;
        if (updateProduct.quantityBuying == updateProduct.quantity) {
          SendErrorNotification(
            "The product doesn't have any more stock than the selected one."
          );
          return false;
        } else {
          updateProduct.quantityBuying++;
          return updateProduct;
        }
      }

      return product;
    });

    if (!newQuantity.includes(false)) {
      setCartItems(newQuantity);
      CalculateTotalPrice();
    }
  }

  return (
    <div className="cart-wrapper">
      {cartItems.length < 1 && (
        <div className="flex-col">
          <span className="empty">Your cart is empty</span>
          <span className="empty-desc">
            Add a product to your cart to continue.
          </span>
          <div className="cart-controls">
            <button
              className="cart-control"
              onClick={() => navigate("/market")}
            >
              to market page
            </button>
          </div>
        </div>
      )}

      {/* Cart with products */}
      {cartItems.length > 0 && (
        <>
          <div className="cart-products">
            {cartItems.map((product) => (
              <div className="cart-product" key={product._id}>
                <div className="product-information main">
                  <div className="title">Product</div>
                  <div className="info-product">
                    <img
                      src={product.imageURL}
                      alt={product.name}
                      className="product-img"
                    />
                    <div className="value">{product.name}</div>
                  </div>
                </div>
                <div className="product-information">
                  <div className="title">Unit Price</div>
                  <div className="info-product">
                    <div className="value">${product.price}</div>
                  </div>
                </div>
                <div className="product-information">
                  <div className="title">Quantity</div>
                  <div className="side-quantity">
                    <button
                      className="remove"
                      onClick={() => RemoveQuantity(product._id)}
                    >
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <span className="quantity">
                      {product.quantityBuying || 1}
                    </span>
                    <button
                      className="add"
                      onClick={() => AddQuantity(product._id)}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                </div>
                <div className="product-information">
                  <div className="title">Total Price</div>
                  <div className="info-product">
                    <div className="value">
                      ${product.price * (product.quantityBuying || 1)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="buy-wrapper">
            <div className="price">
              <span>Total Price:</span>
              <span>${cartPrice}</span>
            </div>
            <div className="desc">
              By clicking &apos;Proceed To Checkout&apos; you agree that this
              order is irefundable. Please double check if you have added your
              desired products in your cart.
            </div>
            <div className="cart-controls">
              <button
                className="cart-control"
                onClick={() =>
                  navigate("/checkout", { replace: true, state: cartItems })
                }
              >
                Proceed To Checkout
              </button>
              <button className="cart-control" onClick={ClearCart}>
                Clear Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
