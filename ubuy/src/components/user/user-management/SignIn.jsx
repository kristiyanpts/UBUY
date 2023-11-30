import { Link } from "react-router-dom";
import "./UserManagement.css";

import { useForm } from "../../../core/hooks/useForm";
import { useContext } from "react";
import AuthContext from "../../../core/contexts/authContext";

const LoginFormKyes = {
  Email: "email",
  Password: "password",
};

const SignIn = () => {
  const { loginSubmitHandler } = useContext(AuthContext);

  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [LoginFormKyes.Email]: "",
    [LoginFormKyes.Password]: "",
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
          name={LoginFormKyes.Email}
          onChange={onChange}
          value={values[LoginFormKyes.Email]}
        />
      </div>
      <div className="input-field">
        <i className="fa-solid fa-lock icon"></i>
        <input
          type="password"
          className="auth-input"
          placeholder="Password"
          name={LoginFormKyes.Password}
          onChange={onChange}
          value={values[LoginFormKyes.Password]}
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
