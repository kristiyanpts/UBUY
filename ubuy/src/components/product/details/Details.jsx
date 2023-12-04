import { Link, useNavigate, useParams } from "react-router-dom";
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
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  // @ts-ignore
  return <Slide direction="up" ref={ref} {...props} />;
});

const Details = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated, userId } = useContext(AuthContext);
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
  const [selectedReview, setSelectedReview] = useState({
    _id: "",
  });
  const [isProductInCart, setIsProductInCart] = useState(false);

  const [deleteReviewDialog, setDeleteReviewDialog] = useState(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);

  const handleClose = () => {
    setSelectedReview({ _id: "" });
    setDeleteProductDialog(false);
    setDeleteReviewDialog(false);
  };

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
      .catch(() => {
        SendErrorNotification("Product not found!");
        navigate("/");
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

  async function deleteReview() {
    try {
      const deleteResponse = await productService.deleteProductReview(
        productId,
        selectedReview._id
      );

      // @ts-ignore
      dispatchReviews({
        type: "GET_ALL_REVIEWS",
        payload: deleteResponse.newProduct,
      });

      handleClose();

      SendSuccessNotification("You successfully deleted your review!");
    } catch (error) {
      let errors = parseError(error);

      errors.forEach((err) => {
        SendErrorNotification(err);
      });
    }
  }

  function AddProductToCart(e) {
    let data = JSON.parse(sessionStorage.getItem("cart-items") || "[]");
    console.log(data, typeof data);
    if (!data.includes(productId)) {
      e.currentTarget.classList.add("clicked");
      data.push(productId);
    } else {
      return SendErrorNotification("This product is already in your cart");
    }

    sessionStorage.setItem("cart-items", JSON.stringify(data));
  }

  async function DeleteListing() {
    try {
      await productService.deleteProduct(productId);

      navigate("/");

      handleClose();

      SendSuccessNotification("Product listing has been deleted successfully");
    } catch (error) {
      let errors = parseError(error);

      errors.forEach((err) => {
        SendErrorNotification(err);
      });
    }
  }

  console.log(product);

  return (
    <div className="details-wrapper">
      <div className="top-part">
        <div className="product-details">
          <div className="main-info">
            <img src={product.imageURL} className="product-image"></img>
            <div className="product-information-details">
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
                <div className="side">
                  {product.category.replace(
                    /(\w)(\w*)/g,
                    function (g0, g1, g2) {
                      return g1.toUpperCase() + g2.toLowerCase();
                    }
                  )}
                </div>
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
            {product.buyers.length > 0 && (
              <>
                <div className="title">Buyers</div>
                <div className="desc">
                  {product.buyers.map((buyer) => (
                    <>
                      <div className="buyer" key={buyer._id}>
                        <div className="side">
                          {buyer.firstName} {buyer.lastName}
                        </div>
                        <div className="side">
                          <Link
                            to={`/users/${buyer._id}`}
                            className="buyer-link"
                          >
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                          </Link>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="product-buy-options">
          {product.owner._id != userId && (
            <>
              <div className="title">Buying Options</div>
              <div className="price">
                <span>Unit Price:</span>
                <span>${product.price}</span>
              </div>
              {product.quantity > 0 && (
                <button className="cart-button" onClick={AddProductToCart}>
                  <span className="add-to-cart">
                    {isProductInCart == true ? "In Cart" : "Add To Cart"}
                  </span>
                  <span className="added">In Cart</span>
                  <i className="fas fa-shopping-cart"></i>
                  <i className="fas fa-box"></i>
                </button>
              )}
            </>
          )}

          {product.quantity <= 0 && <span className="sold-out">Sold Out!</span>}

          {/* Owner options */}
          {product.owner._id == userId && (
            <>
              <div className="title">Listing Management</div>
              <button
                className="manage-button"
                onClick={() => navigate(`/market/${productId}/edit`)}
              >
                <i className="fa-solid fa-pen-to-square"></i> Edit Listing
              </button>
              <button
                className="manage-button"
                onClick={() => setDeleteProductDialog(true)}
              >
                <i className="fa-solid fa-trash"></i> Delete Listing
              </button>
            </>
          )}
        </div>
      </div>
      <div className="bottom-part">
        <div className="title">Product Reviews</div>
        {isAuthenticated && userId != product.owner._id && (
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
        )}
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
                        onClick={() => {
                          setSelectedReview(review);
                          setDeleteReviewDialog(true);
                        }}
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

      <React.Fragment>
        <Dialog
          open={deleteProductDialog}
          TransitionComponent={Transition}
          keepMounted
        >
          <Box
            sx={{
              bgcolor: "darkred",
              color: "white",
            }}
          >
            <DialogTitle
              style={{
                fontSize: "30px",
              }}
            >
              {"Delete your product listing?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText
                id="alert-dialog-slide-description"
                style={{
                  fontSize: "20px",
                  color: "white",
                }}
              >
                Make sure you have selected the correct product listing that you
                want to delete. This action can not be undone!
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleClose}
                style={{
                  fontSize: "20px",
                  color: "white",
                }}
              >
                No
              </Button>
              <Button
                onClick={DeleteListing}
                style={{
                  fontSize: "20px",
                  color: "white",
                }}
              >
                Yes
              </Button>
            </DialogActions>
          </Box>
        </Dialog>
      </React.Fragment>

      <React.Fragment>
        <Dialog
          open={deleteReviewDialog}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <Box
            sx={{
              bgcolor: "darkred",
              color: "white",
            }}
          >
            <DialogTitle
              style={{
                fontSize: "30px",
              }}
            >
              {"Delete your review?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText
                id="alert-dialog-slide-description"
                style={{
                  fontSize: "20px",
                  color: "white",
                }}
              >
                Make sure you have selected the correct review that you want to
                delete. This action can not be undone!
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleClose}
                style={{
                  fontSize: "20px",
                  color: "white",
                }}
              >
                No
              </Button>
              <Button
                onClick={() => {
                  deleteReview(selectedReview._id);
                }}
                style={{
                  fontSize: "20px",
                  color: "white",
                }}
              >
                Yes
              </Button>
            </DialogActions>
          </Box>
        </Dialog>
      </React.Fragment>
    </div>
  );
};

export default Details;
