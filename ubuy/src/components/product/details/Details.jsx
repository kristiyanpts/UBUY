import { Link, useParams } from "react-router-dom";
import "./Details.css";
import { useContext, useEffect, useMemo, useReducer, useState } from "react";

import { parseError } from "../../../core/lib/errorParser";
import {
  SendErrorNotification,
  SendSuccessNotification,
} from "../../../core/notifications/notifications";

import * as productService from "../../../core/services/productService";
import AuthContext from "../../../core/contexts/authContext";
import { useForm } from "../../../core/hooks/useForm";
import reducer from "./reviewReducer";

const Details = () => {
  //   const cartButtons = document.querySelectorAll(".cart-button");

  //   cartButtons.forEach((button) => {
  //     button.addEventListener("click", cartClick);
  //   });

  //   function cartClick() {
  //     let button = this;
  //     button.classList.add("clicked");
  //   }

  // function addToCart(e) {
  //   e.target.classList.add("clicked");
  // }

  const { productId } = useParams();
  const { userId } = useContext(AuthContext);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    quantity: 0,
    date: "",
    price: 0,
    category: "",
    imageURL: "",
    owner: {},
    buyers: [],
    reviews: [],
  });
  const [reviews, dispatchReviews] = useReducer(reducer, []);
  const [isProductInCart, setIsProductInCart] = useState(false);

  useEffect(() => {
    productService
      .getProductById(productId)
      .then((productReceived) => {
        setProduct(productReceived);

        // @ts-ignore
        dispatchReviews({
          type: "GET_ALL_REVIEWS",
          payload: productReceived,
        });
      })
      .catch((error) => {
        let errors = parseError(error);

        errors.forEach((err) => {
          SendErrorNotification(err);
        });
      });

    // Check if item is in cart
    let data = JSON.parse(sessionStorage.getItem("cart-items") || "[]");
    if (data.includes(productId)) {
      setIsProductInCart(true);
    }
  }, [productId]);

  // Reviews

  const initialValues = useMemo(
    () => ({
      caption: "",
      message: "",
    }),
    []
  );

  const { values, onChange, onSubmit } = useForm(onReviewSubmit, initialValues);

  async function onReviewSubmit(values) {
    // Values Validation
    if (values.caption.length < 1) {
      return SendErrorNotification(
        "Review caption must be at least 1 character long"
      );
    }
    if (values.message.length < 1) {
      return SendErrorNotification(
        "Review message must be at least 1 character long"
      );
    }

    try {
      const reviewResponse = await productService.addProductReview(
        productId,
        values
      );

      // @ts-ignore
      dispatchReviews({
        type: "GET_ALL_REVIEWS",
        payload: reviewResponse.newProduct,
      });

      SendSuccessNotification(
        "You successfully added review to the current product!"
      );
    } catch (error) {
      let errors = parseError(error);

      errors.forEach((err) => {
        SendErrorNotification(err);
      });
    }
  }

  async function deleteReview(reviewId) {
    if (confirm("Are you sure you want to delete your review?") == true) {
      try {
        const deleteResponse = await productService.deleteProductReview(
          productId,
          reviewId
        );

        // @ts-ignore
        dispatchReviews({
          type: "GET_ALL_REVIEWS",
          payload: deleteResponse.newProduct,
        });

        SendSuccessNotification("You successfully deleted your review!");
      } catch (error) {
        let errors = parseError(error);

        errors.forEach((err) => {
          SendErrorNotification(err);
        });
      }
    }
  }

  function AddProductToCart(e) {
    let data = JSON.parse(sessionStorage.getItem("cart-items") || "[]");
    if (!data.includes(productId)) {
      e.currentTarget.classList.add("clicked");
      data.push(productId);
    } else {
      return SendErrorNotification("This product is already in your cart");
    }

    sessionStorage.setItem("cart-items", JSON.stringify(data));
  }

  return (
    <div className="details-wrapper">
      <div className="top-part">
        <div className="product-details">
          <div className="main-info">
            <img src={product.imageURL} className="product-image"></img>
            <div className="product-information">
              <div className="title">{product.name}</div>
              <div className="product-info">
                <div className="side left">Listed By:</div>
                <div className="side">
                  <Link to={`/users/${product.owner._id}`} className="author">
                    {product.owner.firstName} {product.owner.lastName}
                  </Link>
                </div>
              </div>
              <div className="product-info">
                <div className="side left">Listed On: </div>
                <div className="side">
                  {new Date(product.date).toLocaleDateString()}
                </div>
              </div>
              <div className="product-info">
                <div className="side left">Quantity:</div>
                <div className="side">{product.quantity}</div>
              </div>
              <div className="product-info">
                <div className="side left">Category:</div>
                <div className="side">{product.category}</div>
              </div>
              <div className="product-info">
                <div className="side left">Bought By:</div>
                <div className="side">{product.buyers.length} people</div>
              </div>
            </div>
          </div>
          <div className="adit-info">
            <div className="title">Description</div>
            <div className="desc">{product.description}</div>
          </div>
        </div>
        <div className="product-buy-options">
          <div className="title">Buying Options</div>
          <div className="price">
            <span>Unit Price:</span>
            <span>${product.price}</span>
          </div>
          <button className="cart-button" onClick={AddProductToCart}>
            <span className="add-to-cart">
              {isProductInCart == true ? "In Cart" : "Add To Cart"}
            </span>
            <span className="added">In Cart</span>
            <i className="fas fa-shopping-cart"></i>
            <i className="fas fa-box"></i>
          </button>

          {/* Owner options */}
          {product.owner._id == userId && (
            <>
              <div className="title">Listing Management</div>
              <button className="manage-button">
                <i className="fa-solid fa-pen-to-square"></i> Edit Listing
              </button>
              <button className="manage-button">
                <i className="fa-solid fa-trash"></i> Delete Listing
              </button>
            </>
          )}
        </div>
      </div>
      <div className="bottom-part">
        <div className="title">Product Reviews</div>
        <form className="review-input" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Review title..."
            name="caption"
            onChange={onChange}
            value={values.caption}
          />
          <textarea
            name="message"
            id="review"
            cols={30}
            rows={5}
            placeholder="Write you review here..."
            onChange={onChange}
            value={values.message}
          ></textarea>
          <button className="send-review" type="submit">
            <i className="fa-solid fa-paper-plane"></i> Send Review
          </button>
        </form>
        <div className="reviews">
          {reviews.length > 0 &&
            reviews.map((review) => (
              <div className="review" key={review._id}>
                <div className="left-side">
                  <img
                    src={
                      review.author.pfpUrl ||
                      "https://w7.pngwing.com/pngs/981/645/png-transparent-default-profile-united-states-computer-icons-desktop-free-high-quality-person-icon-miscellaneous-silhouette-symbol-thumbnail.png"
                    }
                    className="pfp"
                  />
                  <div className="username">{review.author.username}</div>
                  <div className="date">
                    {new Date(review.date).toLocaleString()}
                  </div>
                </div>
                <div className="right-side">
                  <div className="caption">{review.caption}</div>
                  <div className="message">{review.message}</div>
                  {review.author._id == userId && (
                    <div className="review-controls">
                      <button
                        className="review-control"
                        onClick={() => deleteReview(review._id)}
                      >
                        <i className="fa-solid fa-trash"></i> Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}

          {reviews.length == 0 && (
            <div className="no-return">
              There are no reviews for this product yet!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
