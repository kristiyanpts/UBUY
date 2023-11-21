import { Link } from "react-router-dom";
import "./UserManagement.css";

import { useForm } from "../../../core/hooks/useForm";
import { useContext } from "react";
import AuthContext from "../../../core/contexts/authContext";

const SignUp = () => {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    repeatPassword: "",
    pfpUrl: "",
    role: "",
  });

  return (
    <form className="auth-form two-col" onSubmit={onSubmit}>
      <div className="auth-form-info">
        <div className="auth-form-title">Sign Up</div>
        <div className="auth-form-desc">
          Please, sign up using your email address to use our platform.
        </div>
      </div>
      <div className="input-field two-col-input">
        <i className="fa-solid fa-id-badge icon"></i>
        <input
          type="text"
          className="auth-input"
          placeholder="First Name"
          name="firstName"
          onChange={onChange}
          value={values["firstName"]}
        />
      </div>
      <div className="input-field two-col-input">
        <i className="fa-solid fa-id-badge icon"></i>
        <input
          type="text"
          className="auth-input"
          placeholder="Last Name"
          name="lastName"
          onChange={onChange}
          value={values["lastName"]}
        />
      </div>
      <div className="input-field two-col-input">
        <i className="fa-solid fa-envelope icon"></i>
        <input
          type="text"
          className="auth-input"
          placeholder="Email"
          name="email"
          onChange={onChange}
          value={values["email"]}
        />
      </div>
      <div className="input-field two-col-input">
        <i className="fa-solid fa-user icon"></i>
        <input
          type="text"
          className="auth-input"
          placeholder="Username"
          name="username"
          onChange={onChange}
          value={values["username"]}
        />
      </div>
      <div className="input-field two-col-input">
        <i className="fa-solid fa-eye icon toggle-password"></i>
        <i className="fa-solid fa-lock icon"></i>
        <input
          type="text"
          className="auth-input"
          placeholder="Password"
          name="password"
          onChange={onChange}
          value={values["password"]}
        />
      </div>
      <div className="input-field two-col-input">
        <i className="fa-solid fa-eye icon toggle-password"></i>
        <i className="fa-solid fa-lock icon"></i>
        <input
          type="text"
          className="auth-input"
          placeholder="Confirm Password"
          name="repeatPassword"
          onChange={onChange}
          value={values["repeatPassword"]}
        />
      </div>
      <div className="input-field two-col-input">
        <i className="fa-solid fa-image icon"></i>
        <input
          type="text"
          className="auth-input"
          placeholder="Profile Picture URL"
          name="pfpUrl"
          onChange={onChange}
          value={values["pfpUrl"]}
        />
      </div>
      <div className="input-field two-col-input">
        <i className="fa-solid fa-cart-shopping icon"></i>
        <select
          name="role"
          id="role"
          className="auth-input"
          onChange={onChange}
          value={values["role"]}
        >
          <option value="buyer">Buyer</option>
          <option value="seller">Seler</option>
          <option value="both">Both</option>
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
    </form>
  );
};

export default SignUp;
