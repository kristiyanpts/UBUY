import { Link } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="auth-form">
      <div className="auth-form-info">
        <div className="auth-form-title">Sign In</div>
        <div className="auth-form-desc">
          Please, sign in using your account to use our platform.
        </div>
      </div>
      <div className="input-field">
        <i className="fa-solid fa-envelope icon"></i>
        <input type="text" className="auth-input" placeholder="Email" />
      </div>
      <div className="input-field">
        <i className="fa-solid fa-lock icon"></i>
        <input type="text" className="auth-input" placeholder="Password" />
      </div>
      <button className="auth-button">Sign In</button>

      <div className="splitter">
        <span>OR</span>
      </div>

      <div className="other-option">
        <span>Don&apos;t have an account, yet?</span>
        <Link to="/sign-up">Sign Up</Link>
      </div>
    </div>
  );
};

export default SignIn;
