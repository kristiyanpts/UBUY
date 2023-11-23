import { Link, useParams } from "react-router-dom";
import "./Details.css";
import { useContext, useEffect, useState } from "react";

import { parseError } from "../../../core/lib/errorParser";
import { SendErrorNotification } from "../../../core/notifications/notifications";

import * as productService from "../../../core/services/productService";
import AuthContext from "../../../core/contexts/authContext";

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
  });

  useEffect(() => {
    console.log("zdr?");
    productService
      .getProductById(productId)
      .then(setProduct)
      .catch((error) => {
        let errors = parseError(error);

        errors.forEach((err) => {
          SendErrorNotification(err);
        });
      });
  }, [productId]);

  console.log(product);

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
          <button className="cart-button">
            <span className="add-to-cart">Add to cart</span>
            <span className="added">Added</span>
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
        <div className="review-input">
          <textarea
            name="review"
            id="review"
            cols={30}
            rows={5}
            placeholder="Write you review here..."
          ></textarea>
          <button className="send-review">
            <i className="fa-solid fa-paper-plane"></i> Send Review
          </button>
        </div>
        <div className="reviews">
          <div className="review">
            <div className="left-side">
              <img
                src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"
                alt=""
                className="pfp"
              />
              <div className="username">Kris</div>
              <div className="date">12/12/1222 at 10:12</div>
            </div>
            <div className="right-side">
              <div className="message">
                this asdasdthis asdasdthis asdasdthis asdasdthis asdasdthis
                asdasdthis asdasdthis asdasdthis asdasdthis asdasdthis
                asdasdthis asdasdthis asdasdthis asdasdthis asdasdthis
                asdasdthis asdasdthis asdasdthis asdasd
              </div>
              <div className="review-controls">
                <button className="review-control">
                  <i className="fa-solid fa-trash"></i> Delete
                </button>
              </div>
            </div>
          </div>
          <div className="review">
            <div className="left-side">
              <img
                src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"
                alt=""
                className="pfp"
              />
              <div className="username">Kris</div>
              <div className="date">12/12/1222 at 10:12</div>
            </div>
            <div className="right-side">
              <div className="message">
                this asdasdthis asdasdthis asdasdthis asdasdthis asdasdthis
                asdasdthis asdasdthis asdasdthis asdasdthis asdasdthis
                asdasdthis asdasdthis asdasdthis asdasdthis asdasdthis
                asdasdthis asdasdthis asdasdthis asdasd
              </div>
              <div className="review-controls">
                <button className="review-control">
                  <i className="fa-solid fa-trash"></i> Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
