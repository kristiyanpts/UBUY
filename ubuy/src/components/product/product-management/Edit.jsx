import { useNavigate, useParams } from "react-router-dom";
import "./ProductManagement.css";
import { useContext, useEffect, useState } from "react";
import * as productService from "../../../core/services/productService";
import { parseError } from "../../../core/lib/errorParser";
import {
  SendErrorNotification,
  SendSuccessNotification,
} from "../../../core/notifications/notifications";
import AuthContext from "../../../core/contexts/authContext";

const Edit = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { userId } = useContext(AuthContext);
  const [product, setProduct] = useState({
    name: "",
    quantity: "",
    price: "",
    category: "",
    imageURL: "",
    description: "",
    owner: {},
  });

  useEffect(() => {
    productService.getProductById(productId).then((result) => {
      setProduct(result);
    });
  }, [productId]);

  if (userId != product.owner._id) {
    navigate(`/market/${productId}/details`);
  }

  const onProductEdit = async (e) => {
    e.preventDefault();

    // @ts-ignore
    const values = Object.fromEntries(new FormData(e.currentTarget));

    // Values Validation
    if (values.name.length < 5) {
      return SendErrorNotification(
        `Product name should be at least 5 characters long`
      );
    }
    if (values.description.length < 20) {
      return SendErrorNotification(
        `Product description should be at least 20 characters long`
      );
    }
    if (values.quantity < 1) {
      return SendErrorNotification(`Product quantity should be at least 1`);
    }
    if (values.price < 1) {
      return SendErrorNotification(`Product price should be at least 1`);
    }

    try {
      await productService.editProduct(productId, values);

      SendSuccessNotification("Product listing updated successfully.");

      navigate(`/market/${productId}/details`);
    } catch (error) {
      let errors = parseError(error);

      errors.forEach((err) => {
        SendErrorNotification(err);
      });
    }
  };

  const onChange = (e) => {
    setProduct((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className="create-form two-col" onSubmit={onProductEdit}>
      <div className="create-form-info">
        <div className="create-form-title">Edit Listing</div>
        <div className="create-form-desc">
          Fill in the required information about the product you are listing.
          All fields are required.
        </div>
      </div>
      <div className="input-field-create two-col-input-create">
        <i className="fa-brands fa-product-hunt icon"></i>
        <input
          type="text"
          className="auth-input"
          placeholder="Product Name"
          name="name"
          value={product.name}
          onChange={onChange}
        />
      </div>
      <div className="input-field-create two-col-input-create">
        <i className="fa-solid fa-arrow-up-wide-short icon"></i>
        <input
          type="number"
          className="auth-input"
          placeholder="Quantity"
          name="quantity"
          min={1}
          max={50}
          value={product.quantity}
          onChange={onChange}
        />
      </div>
      <div className="input-field-create two-col-input-create">
        <i className="fa-solid fa-money-bill-wave icon"></i>
        <input
          type="number"
          className="auth-input"
          placeholder="Price"
          name="price"
          min={1}
          value={product.price}
          onChange={onChange}
        />
      </div>
      <div className="input-field-create two-col-input-create">
        <i className="fa-solid fa-tag icon"></i>
        <select
          name="category"
          id="category"
          className="auth-input"
          placeholder="Category"
          value={product.category}
          onChange={onChange}
        >
          <option value="home">Home</option>
          <option value="electronics">Electronics</option>
          <option value="gaming">Gaming</option>
          <option value="other">Others</option>
        </select>
      </div>
      <div className="input-field-create">
        <i className="fa-solid fa-image icon"></i>
        <input
          type="text"
          className="auth-input"
          placeholder="Image URL"
          name="imageURL"
          value={product.imageURL}
          onChange={onChange}
        />
      </div>
      <div className="input-field-textarea">
        <textarea
          name="description"
          id=""
          cols={30}
          rows={9}
          placeholder="Breif description of your product..."
          value={product.description}
          onChange={onChange}
        ></textarea>
      </div>

      <button className="auth-button">Edit listing</button>
    </form>
  );
};

export default Edit;
