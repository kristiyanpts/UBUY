import { useNavigate, useParams } from "react-router-dom";
import "./ProductManagement.css";
import { useEffect, useState } from "react";
import * as productService from "../../../core/services/productService";
import { parseError } from "../../../core/lib/errorParser";
import { SendErrorNotification } from "../../../core/notifications/notifications";
import { useForm } from "../../../core/hooks/useForm";

const Edit = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState({
    name: "",
    quantity: "",
    price: "",
    category: "",
    imageURL: "",
    description: "",
  });

  useEffect(() => {
    productService.getProductById(productId).then((result) => {
      setProduct(result);
    });
  }, [productId]);

  const onProductEdit = async (values) => {};

  const { values, onChange, onSubmit } = useForm(onProductEdit, product);

  console.log(product, values);

  return (
    <form className="create-form two-col" onSubmit={onSubmit}>
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
          value={values.name}
          onChange={onChange}
        />
      </div>
      <div className="input-field-create two-col-input-create">
        <i className="fa-solid fa-arrow-up-wide-short icon"></i>
        <input
          type="text"
          className="auth-input"
          placeholder="Quantity"
          name="quantity"
          value={values.quantity}
          onChange={onChange}
        />
      </div>
      <div className="input-field-create two-col-input-create">
        <i className="fa-solid fa-money-bill-wave icon"></i>
        <input
          type="text"
          className="auth-input"
          placeholder="Price"
          name="price"
          value={values.price}
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
          value={values.category}
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
          value={values.imageURL}
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
          value={values.description}
          onChange={onChange}
        ></textarea>
      </div>

      <button className="auth-button">Edit listing</button>
    </form>
  );
};

export default Edit;
