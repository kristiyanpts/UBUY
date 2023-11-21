import "./ProductManagement.css";

const Create = () => {
  return (
    <div className="create-form two-col">
      <div className="create-form-info">
        <div className="create-form-title">Add Listing</div>
        <div className="create-form-desc">
          Fill in the required information about the product you are listing.
          All fields are required.
        </div>
      </div>
      <div className="input-field-create two-col-input-create">
        <i className="fa-brands fa-product-hunt icon"></i>
        <input type="text" className="auth-input" placeholder="Product Name" />
      </div>
      <div className="input-field-create two-col-input-create">
        <i className="fa-solid fa-arrow-up-wide-short icon"></i>
        <input type="text" className="auth-input" placeholder="Quantity" />
      </div>
      <div className="input-field-create two-col-input-create">
        <i className="fa-solid fa-money-bill-wave icon"></i>
        <input type="text" className="auth-input" placeholder="Price" />
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
        <input type="text" className="auth-input" placeholder="Image URL" />
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
    </div>
  );
};

export default Create;
