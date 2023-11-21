import { Link } from "react-router-dom";
import "./Details.css";

const Details = () => {
  return (
    <div className="details-wrapper">
      <div className="top-part">
        <div className="product-details">
          <div className="main-info">
            <img
              src="https://cdncloudcart.com/402/products/images/77310/konzola-playstation-5-image_5fad136c1c553_600x600.jpeg?1605178237"
              className="product-image"
            ></img>
            <div className="product-information">
              <div className="title">Playstation 5</div>
              <div className="product-info">
                <div className="side left">Listed By:</div>
                <div className="side">
                  <Link to="/users/123123" className="author">
                    Kristiyan Petsanov
                  </Link>
                </div>
              </div>
              <div className="product-info">
                <div className="side left">Listed On: </div>
                <div className="side">12/12/1222</div>
              </div>
              <div className="product-info">
                <div className="side left">Quantity:</div>
                <div className="side">5</div>
              </div>
              <div className="product-info">
                <div className="side left">Category:</div>
                <div className="side">Gaming</div>
              </div>
              <div className="product-info">
                <div className="side left">Bought By:</div>
                <div className="side">5 people</div>
              </div>
            </div>
          </div>
          <div className="adit-info">
            <div className="title">Description</div>
            <div className="desc">
              This is my description. This is my description. This is my
              description. This is my description. This is my description. This
              is my description. This is my description. This is my description.
              This is my description. This is my description. This is my
              description. This is my description. This is my description. This
              is my description. This is my description. This is my description.
              This is my description. This is my description. This is my
              description. This is my description. This is my description.{" "}
            </div>
          </div>
        </div>
        <div className="product-buy-options">
          <div className="title">Buying Options</div>
          <div className="price">
            <span>Unit Price:</span>
            <span>$1500,00</span>
          </div>
          <button className="cart-button">
            <span className="add-to-cart">Add to cart</span>
            <span className="added">Added</span>
            <i className="fas fa-shopping-cart"></i>
            <i className="fas fa-box"></i>
          </button>

          {/* Owner options */}
          <div className="title">Listing Management</div>
          <button className="manage-button">
            <i className="fa-solid fa-pen-to-square"></i> Edit Listing
          </button>
          <button className="manage-button">
            <i className="fa-solid fa-trash"></i> Delete Listing
          </button>
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
