import "./UserManagement.css";

const EditProfile = () => {
  return (
    <div className="auth-form two-col">
      <div className="auth-form-info">
        <div className="auth-form-title">Edit Your Profile</div>
        <div className="auth-form-desc">
          Edit all of the fields with the desired changes.
        </div>
      </div>
      <div className="input-field two-col-input">
        <i className="fa-solid fa-id-badge icon"></i>
        <input type="text" className="auth-input" placeholder="First Name" />
      </div>
      <div className="input-field two-col-input">
        <i className="fa-solid fa-id-badge icon"></i>
        <input type="text" className="auth-input" placeholder="Last Name" />
      </div>
      <div className="input-field two-col-input">
        <i className="fa-solid fa-envelope icon"></i>
        <input type="text" className="auth-input" placeholder="Email" />
      </div>
      <div className="input-field two-col-input">
        <i className="fa-solid fa-user icon"></i>
        <input type="text" className="auth-input" placeholder="Username" />
      </div>
      <div className="input-field two-col-input">
        <i className="fa-solid fa-eye icon toggle-password"></i>
        <i className="fa-solid fa-lock icon"></i>
        <input
          type="text"
          className="auth-input"
          placeholder="Current Password"
        />
      </div>
      <div className="input-field two-col-input">
        <i className="fa-solid fa-eye icon toggle-password"></i>
        <i className="fa-solid fa-lock icon"></i>
        <input type="text" className="auth-input" placeholder="New Password" />
      </div>
      <div className="input-field two-col-input">
        <i className="fa-solid fa-image icon"></i>
        <input
          type="text"
          className="auth-input"
          placeholder="Profile Picture URL"
        />
      </div>
      <div className="input-field two-col-input">
        <i className="fa-solid fa-cart-shopping icon"></i>
        <select name="role" id="role" className="auth-input">
          <option value="buyer">Buyer</option>
          <option value="seler">Seler</option>
          <option value="both">Both</option>
        </select>
      </div>

      <button className="auth-button">Edit Profile</button>
    </div>
  );
};

export default EditProfile;
