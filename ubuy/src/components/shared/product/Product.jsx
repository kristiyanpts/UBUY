import "./Product.css";

const Product = (data) => {
  console.log(data);

  return (
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
  );
};

export default Product;
