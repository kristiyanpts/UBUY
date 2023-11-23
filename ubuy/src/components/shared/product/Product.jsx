import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = (productData) => {
  let navigate = useNavigate();
  return (
    <div className="product">
      <img src={productData.imageURL} alt="" className="product-img" />
      <div className="name">{productData.name}</div>
      <div className="product-info">
        <div className="side">Listed By:</div>
        <div className="side">{productData.owner.username}</div>
      </div>
      <div className="product-info">
        <div className="side">Listed On: </div>
        <div className="side">
          {new Date(productData.date).toLocaleDateString()}
        </div>
      </div>
      <div className="product-info">
        <div className="side">Quantity:</div>
        <div className="side">{productData.quantity}</div>
      </div>
      <div className="price">${productData.price}</div>
      <button
        className="details-btn"
        onClick={() => navigate(`/market/${productData._id}/details`)}
      >
        View Details
      </button>
    </div>
  );
};

export default Product;
