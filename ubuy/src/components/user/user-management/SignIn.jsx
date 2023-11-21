import { Link } from "react-router-dom";
import "./UserManagement.css";

import { useForm } from "../../../core/hooks/useForm";
import { useContext } from "react";
import AuthContext from "../../../core/contexts/authContext";

const SignIn = () => {
  const { loginSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    email: "",
    password: "",
  });

  return (
    <form className="auth-form" onSubmit={onSubmit}>
      <div className="auth-form-info">
        <div className="auth-form-title">Sign In</div>
        <div className="auth-form-desc">
          Please, sign in using your account to use our platform.
        </div>
      </div>
      <div className="input-field">
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
      <div className="input-field">
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

      <button className="auth-button" type="submit">
        Sign In
      </button>

      <div className="splitter">
        <span>OR</span>
      </div>

      <div className="other-option">
        <span>Don&apos;t have an account, yet?</span>
        <Link to="/sign-up">Sign Up</Link>
      </div>
    </form>
  );
};

export default SignIn;
