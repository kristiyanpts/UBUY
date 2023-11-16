import peopleShopping from "../../../assets/people-shopping.png";
import "./Home.css";

const Home = () => {
  //   const cartButtons = document.querySelectorAll(".cart-button");

  //   cartButtons.forEach((button) => {
  //     button.addEventListener("click", cartClick);
  //   });

  //   function cartClick() {
  //     let button = this;
  //     button.classList.add("clicked");
  //   }

  return (
    <div className="home-wrapper">
      <div className="about-us">
        <img src={peopleShopping} alt="" />
        <div className="info">
          <div className="title">
            About <span className="shop-name">UBUY</span>
          </div>
          <div className="desc">
            UBUY is the world&apos;s best marketplace available. You can find
            everything you might need for your home, garden etc. Got something
            you don&apos;t need anymore? Someone in this world might need it!
            List it for sale on our market and get rid of it! Register today and
            do good to yourself and others around the globe!
          </div>
          <div className="title">
            <span className="shop-name">UBUY</span>&apos;s Moto
          </div>
          <div className="desc">
            “Whoever said money can’t buy happiness simply didn’t know where to
            go shopping.” — Bo Derek
          </div>
          <div className="home-buttons">
            <button>Sign Up</button>
            <button>Browse Our Products</button>
            <button>Create A Listing</button>
          </div>
        </div>
      </div>
      <div className="recent-products">
        <div className="title">Recently Listed Products</div>
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

export default Home;
