import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-wrapper">
      <div className="title">Kris&apos; Profile Information</div>
      <div className="profile-info">
        <div className="left-side">
          <img
            src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"
            alt=""
            className="pfp"
          />
        </div>
        <div className="right-side">
          <div className="info-field">
            <div className="side">Email:</div>
            <div className="side">kristiqn3456@gmail.com</div>
          </div>
          <div className="info-field">
            <div className="side">Full Name:</div>
            <div className="side">Kristiyan Petsanov</div>
          </div>
          <div className="info-field">
            <div className="side">Role:</div>
            <div className="side">Owner</div>
          </div>
          <div className="info-field">
            <div className="side">Listed Products:</div>
            <div className="side">5</div>
          </div>
          <div className="profile-controls">
            <button className="profile-control">Edit Profile</button>
            <button className="profile-control red">Delete Profile</button>
          </div>
        </div>
      </div>
      <div className="title">Kris&apos; Listed Products</div>
      <div className="recent-products">
        <div className="products">
          <div className="product">
            <img
              src="https://cdncloudcart.com/402/products/images/77310/konzola-playstation-5-image_5fad136c1c553_600x600.jpeg?1605178237"
              alt=""
              className="product-img"
            />
            <div className="name">Playstation 5</div>
            <div className="product-info">
              <div className="side">Listed By:</div>
              <div className="side">Kris</div>
            </div>
            <div className="product-info">
              <div className="side">Listed On: </div>
              <div className="side">12/12/1222</div>
            </div>
            <div className="product-info">
              <div className="side">Quantity:</div>
              <div className="side">5</div>
            </div>
            <div className="price">$1500,00</div>
            <button className="cart-button">
              <span className="add-to-cart">Add to cart</span>
              <span className="added">Added</span>
              <i className="fas fa-shopping-cart"></i>
              <i className="fas fa-box"></i>
            </button>
          </div>
          <div className="product">
            <img
              src="https://cdncloudcart.com/402/products/images/77310/konzola-playstation-5-image_5fad136c1c553_600x600.jpeg?1605178237"
              alt=""
              className="product-img"
            />
            <div className="name">Playstation 5</div>
            <div className="product-info">
              <div className="side">Listed By:</div>
              <div className="side">Kris</div>
            </div>
            <div className="product-info">
              <div className="side">Listed On: </div>
              <div className="side">12/12/1222</div>
            </div>
            <div className="product-info">
              <div className="side">Quantity:</div>
              <div className="side">5</div>
            </div>
            <div className="price">$1500,00</div>
            <button className="cart-button">
              <span className="add-to-cart">Add to cart</span>
              <span className="added">Added</span>
              <i className="fas fa-shopping-cart"></i>
              <i className="fas fa-box"></i>
            </button>
          </div>
          <div className="product">
            <img
              src="https://cdncloudcart.com/402/products/images/77310/konzola-playstation-5-image_5fad136c1c553_600x600.jpeg?1605178237"
              alt=""
              className="product-img"
            />
            <div className="name">Playstation 5</div>
            <div className="product-info">
              <div className="side">Listed By:</div>
              <div className="side">Kris</div>
            </div>
            <div className="product-info">
              <div className="side">Listed On: </div>
              <div className="side">12/12/1222</div>
            </div>
            <div className="product-info">
              <div className="side">Quantity:</div>
              <div className="side">5</div>
            </div>
            <div className="price">$1500,00</div>
            <button className="cart-button">
              <span className="add-to-cart">Add to cart</span>
              <span className="added">Added</span>
              <i className="fas fa-shopping-cart"></i>
              <i className="fas fa-box"></i>
            </button>
          </div>
          <div className="product">
            <img
              src="https://cdncloudcart.com/402/products/images/77310/konzola-playstation-5-image_5fad136c1c553_600x600.jpeg?1605178237"
              alt=""
              className="product-img"
            />
            <div className="name">Playstation 5</div>
            <div className="product-info">
              <div className="side">Listed By:</div>
              <div className="side">Kris</div>
            </div>
            <div className="product-info">
              <div className="side">Listed On: </div>
              <div className="side">12/12/1222</div>
            </div>
            <div className="product-info">
              <div className="side">Quantity:</div>
              <div className="side">5</div>
            </div>
            <div className="price">$1500,00</div>
            <button className="cart-button">
              <span className="add-to-cart">Add to cart</span>
              <span className="added">Added</span>
              <i className="fas fa-shopping-cart"></i>
              <i className="fas fa-box"></i>
            </button>
          </div>
          <div className="product">
            <img
              src="https://cdncloudcart.com/402/products/images/77310/konzola-playstation-5-image_5fad136c1c553_600x600.jpeg?1605178237"
              alt=""
              className="product-img"
            />
            <div className="name">Playstation 5</div>
            <div className="product-info">
              <div className="side">Listed By:</div>
              <div className="side">Kris</div>
            </div>
            <div className="product-info">
              <div className="side">Listed On: </div>
              <div className="side">12/12/1222</div>
            </div>
            <div className="product-info">
              <div className="side">Quantity:</div>
              <div className="side">5</div>
            </div>
            <div className="price">$1500,00</div>
            <button className="cart-button">
              <span className="add-to-cart">Add to cart</span>
              <span className="added">Added</span>
              <i className="fas fa-shopping-cart"></i>
              <i className="fas fa-box"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
