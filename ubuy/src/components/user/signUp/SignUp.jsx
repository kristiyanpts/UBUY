import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="auth-form two-col">
      <div className="auth-form-info">
        <div className="auth-form-title">Sign Up</div>
        <div className="auth-form-desc">
          Please, sign up using your email address to use our platform.
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
        <input type="text" className="auth-input" placeholder="Password" />
      </div>
      <div className="input-field two-col-input">
        <i className="fa-solid fa-eye icon toggle-password"></i>
        <i className="fa-solid fa-lock icon"></i>
        <input
          type="text"
          className="auth-input"
          placeholder="Confirm Password"
        />
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
          <option value="mercedes">Both</option>
        </select>
      </div>

      <button className="auth-button">Sign Up</button>

      <div className="splitter">
        <span>OR</span>
      </div>

      <div className="other-option">
        <span>Already have an account?</span>
        <Link to="/sign-in">Sign In</Link>
      </div>
    </div>
  );
};

export default SignUp;
