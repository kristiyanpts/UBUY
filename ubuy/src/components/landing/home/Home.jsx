import { useEffect, useState } from "react";
import peopleShopping from "../../../assets/people-shopping.png";
import "./Home.css";
import Product from "../../shared/product/Product";
import { parseError } from "../../../core/lib/errorParser";
import { SendErrorNotification } from "../../../core/notifications/notifications";
import * as productService from "../../../core/services/productService";
import { useContext } from "react";
import AuthContext from "../../../core/contexts/authContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    productService
      .getProductsByLimit(5)
      .then((result) => setProducts(result))
      .catch((error) => {
        let errors = parseError(error);

        errors.forEach((err) => {
          SendErrorNotification(err);
        });
      });
  }, []);

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
            {isAuthenticated && (
              <button onClick={() => navigate("/create")}>
                Create A Listing
              </button>
            )}
            {!isAuthenticated && (
              <button onClick={() => navigate("/sign-up")}>Sign Up</button>
            )}
            <button onClick={() => navigate("/market")}>
              Browse Our Products
            </button>
          </div>
        </div>
      </div>
      <div className="recent-products">
        <div className="title">Recently Listed Products</div>
        <div className="products">
          {products.length > 0 &&
            products.map((product) => (
              <Product key={product._id} {...product}></Product>
            ))}

          {products.length == 0 && (
            <div className="no-return">
              There are no recently added products!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
