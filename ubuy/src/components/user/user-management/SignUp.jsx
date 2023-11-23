import { Link } from "react-router-dom";
import "./UserManagement.css";

import { useForm } from "../../../core/hooks/useForm";
import { useContext, useState } from "react";
import AuthContext from "../../../core/contexts/authContext";

const SignUpFormKyes = {
  FirstName: "firstName",
  LastName: "lastName",
  Email: "email",
  Username: "username",
  Password: "password",
  RepeatPassword: "repeatPassword",
  PfpUrl: "pfpUrl",
  Role: "role",
};

const SignUp = () => {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [SignUpFormKyes.FirstName]: "",
    [SignUpFormKyes.LastName]: "",
    [SignUpFormKyes.Email]: "",
    [SignUpFormKyes.Username]: "",
    [SignUpFormKyes.Password]: "",
    [SignUpFormKyes.RepeatPassword]: "",
    [SignUpFormKyes.PfpUrl]: "",
    [SignUpFormKyes.Role]: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

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
          name={SignUpFormKyes.FirstName}
          onChange={onChange}
          value={values[SignUpFormKyes.FirstName]}
        />
      </div>
      <div className="input-field two-col-input">
        <i className="fa-solid fa-id-badge icon"></i>
        <input
          type="text"
          className="auth-input"
          placeholder="Last Name"
          name={SignUpFormKyes.LastName}
          onChange={onChange}
          value={values[SignUpFormKyes.LastName]}
        />
      </div>
      <div className="input-field two-col-input">
        <i className="fa-solid fa-envelope icon"></i>
        <input
          type="text"
          className="auth-input"
          placeholder="Email"
          name={SignUpFormKyes.Email}
          onChange={onChange}
          value={values[SignUpFormKyes.Email]}
        />
      </div>
      <div className="input-field two-col-input">
        <i className="fa-solid fa-user icon"></i>
        <input
          type="text"
          className="auth-input"
          placeholder="Username"
          name={SignUpFormKyes.Username}
          onChange={onChange}
          value={values[SignUpFormKyes.Username]}
        />
      </div>
      <div className="input-field two-col-input">
        <i
          className="fa-solid fa-eye icon toggle-password"
          onClick={() => setShowPassword(!showPassword)}
        ></i>
        <i className="fa-solid fa-lock icon"></i>
        <input
          type={showPassword ? "text" : "password"}
          className="auth-input"
          placeholder="Password"
          name={SignUpFormKyes.Password}
          onChange={onChange}
          value={values[SignUpFormKyes.Password]}
        />
      </div>
      <div className="input-field two-col-input">
        <i
          className="fa-solid fa-eye icon toggle-password"
          onClick={() => setShowRepeatPassword(!showRepeatPassword)}
        ></i>
        <i className="fa-solid fa-lock icon"></i>
        <input
          type={showRepeatPassword ? "text" : "password"}
          className="auth-input"
          placeholder="Confirm Password"
          name={SignUpFormKyes.RepeatPassword}
          onChange={onChange}
          value={values[SignUpFormKyes.RepeatPassword]}
        />
      </div>
      <div className="input-field two-col-input">
        <i className="fa-solid fa-image icon"></i>
        <input
          type="text"
          className="auth-input"
          placeholder="Profile Picture URL"
          name={SignUpFormKyes.PfpUrl}
          onChange={onChange}
          value={values[SignUpFormKyes.PfpUrl]}
        />
      </div>
      <div className="input-field two-col-input">
        <i className="fa-solid fa-cart-shopping icon"></i>
        <select
          name={SignUpFormKyes.Role}
          id="role"
          className="auth-input"
          onChange={onChange}
          value={values[SignUpFormKyes.Role]}
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
