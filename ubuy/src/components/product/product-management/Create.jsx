import { useNavigate } from "react-router-dom";
import "./ProductManagement.css";

import * as productService from "../../../core/services/productService";
import { parseError } from "../../../core/lib/errorParser";
import { SendErrorNotification } from "../../../core/notifications/notifications";

const Create = () => {
  const navigate = useNavigate();

  const onCreateSubmit = async (e) => {
    e.preventDefault();
    // @ts-ignore
    const formData = Object.fromEntries(new FormData(e.currentTarget));

    // Values Validation
    if (formData.name.length < 5) {
      return SendErrorNotification(
        `Product name should be at least 5 characters long`
      );
    }
    if (formData.description.length < 20) {
      return SendErrorNotification(
        `Product description should be at least 20 characters long`
      );
    }
    if (formData.quantity < 1) {
      return SendErrorNotification(`Product quantity should be at least 1`);
    }
    if (formData.price < 1) {
      return SendErrorNotification(`Product price should be at least 1`);
    }

    // Back-End Request
    try {
      await productService.createProduct(formData);

      navigate("/market");
    } catch (error) {
      let errors = parseError(error);

      errors.forEach((err) => {
        SendErrorNotification(err);
      });
    }
  };

  return (
    <form className="create-form two-col" onSubmit={onCreateSubmit}>
      <div className="create-form-info">
        <div className="create-form-title">Add Listing</div>
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
        />
      </div>
      <div className="input-field-create two-col-input-create">
        <i className="fa-solid fa-arrow-up-wide-short icon"></i>
        <input
          type="number"
          min={1}
          max={50}
          className="auth-input"
          placeholder="Quantity"
          name="quantity"
        />
      </div>
      <div className="input-field-create two-col-input-create">
        <i className="fa-solid fa-money-bill-wave icon"></i>
        <input
          type="number"
          min={1}
          className="auth-input"
          placeholder="Price"
          name="price"
        />
      </div>
      <div className="input-field-create two-col-input-create">
        <i className="fa-solid fa-tag icon"></i>
        <select
          name="category"
          id="category"
          className="auth-input"
          placeholder="Category"
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
        />
      </div>
      <div className="input-field-textarea">
        <textarea
          name="description"
          id=""
          cols={30}
          rows={9}
          placeholder="Breif description of your product..."
        ></textarea>
      </div>

      <button className="auth-button">Add listing</button>
    </form>
  );
};

export default Create;
