import { useNavigate } from "react-router-dom";
import "./Cart.css";
import toast from "react-hot-toast";
import { useEffect } from "react";

const Cart = () => {
  let navigate = useNavigate();

  useEffect(() => {
    let cartItems = JSON.parse(sessionStorage.getItem("cart-items") || "[]");
    console.log(cartItems);
  }, []);

  const PlaceOrder = () => {
    toast.success("Your order has been placed!", {
      style: {
        border: "2px solid var(--text-primary)",
        color: "var(--text-primary)",
        backgroundColor: "var(--background-primary)",
        fontSize: "18px",
        borderRadius: "5px",
        boxShadow: "0px 0px 5px 0px var(--text-primary)",
      },
      duration: 4000,
      iconTheme: {
        primary: "yellowgreen",
        secondary: "var(--text-primary)",
      },
    });
  };

  return (
    <div className="cart-wrapper">
      {/* Empty Cart */}
      {/* <span className="empty">Your cart is empty</span>
      <span className="empty-desc">
        Add a product to your cart to continue.
      </span>
      <div className="cart-controls">
        <button className="cart-control" onClick={() => navigate("/market")}>
          to market page
        </button>
      </div> */}

      {/* Cart with products */}
      <div className="cart-products">
        <div className="cart-product">
          <div className="product-information main">
            <div className="title">Product</div>
            <div className="info-product">
              <img
                src="https://cdncloudcart.com/402/products/images/77310/konzola-playstation-5-image_5fad136c1c553_600x600.jpeg?1605178237"
                alt=""
                className="product-img"
              />
              <div className="value">Playstation 5</div>
            </div>
          </div>
          <div className="product-information">
            <div className="title">Unit Price</div>
            <div className="info-product">
              <div className="value">$1500,00</div>
            </div>
          </div>
          <div className="product-information">
            <div className="title">Quantity</div>
            <div className="side-quantity">
              <button className="remove">
                <i className="fa-solid fa-minus"></i>
              </button>
              <span className="quantity">1</span>
              <button className="add">
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
          <div className="product-information">
            <div className="title">Total Price</div>
            <div className="info-product">
              <div className="value">$1500,00</div>
            </div>
          </div>
        </div>
        <div className="cart-product">
          <div className="product-information main">
            <div className="title">Product</div>
            <div className="info-product">
              <img
                src="https://cdncloudcart.com/402/products/images/77310/konzola-playstation-5-image_5fad136c1c553_600x600.jpeg?1605178237"
                alt=""
                className="product-img"
              />
              <div className="value">Playstation 5</div>
            </div>
          </div>
          <div className="product-information">
            <div className="title">Unit Price</div>
            <div className="info-product">
              <div className="value">$1500,00</div>
            </div>
          </div>
          <div className="product-information">
            <div className="title">Quantity</div>
            <div className="side-quantity">
              <button className="remove">
                <i className="fa-solid fa-minus"></i>
              </button>
              <span className="quantity">1</span>
              <button className="add">
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
          <div className="product-information">
            <div className="title">Total Price</div>
            <div className="info-product">
              <div className="value">$1500,00</div>
            </div>
          </div>
        </div>
        <div className="cart-product">
          <div className="product-information main">
            <div className="title">Product</div>
            <div className="info-product">
              <img
                src="https://cdncloudcart.com/402/products/images/77310/konzola-playstation-5-image_5fad136c1c553_600x600.jpeg?1605178237"
                alt=""
                className="product-img"
              />
              <div className="value">Playstation 5</div>
            </div>
          </div>
          <div className="product-information">
            <div className="title">Unit Price</div>
            <div className="info-product">
              <div className="value">$1500,00</div>
            </div>
          </div>
          <div className="product-information">
            <div className="title">Quantity</div>
            <div className="side-quantity">
              <button className="remove">
                <i className="fa-solid fa-minus"></i>
              </button>
              <span className="quantity">1</span>
              <button className="add">
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
          <div className="product-information">
            <div className="title">Total Price</div>
            <div className="info-product">
              <div className="value">$1500,00</div>
            </div>
          </div>
        </div>
      </div>

      <div className="buy-wrapper">
        <div className="price">
          <span>Total Price:</span>
          <span>$1500,00</span>
        </div>
        <div className="desc">
          By clicking &apos;Place Order&apos; you agree that this order is
          irefundable. Please double check if you have added your desired
          products in your cart.
        </div>
        <div className="cart-controls">
          <button className="cart-control" onClick={PlaceOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
