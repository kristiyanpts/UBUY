import { Link } from "react-router-dom";
import ubuyLogo from "../../../assets/ubuy-logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src={ubuyLogo} alt="" className="logo" />
      <nav className="navlist">
        <Link to="/">
          <i className="fa-solid fa-house"></i> | Home
        </Link>
        <Link to="/market">
          <i className="fa-solid fa-shop"></i> | Market
        </Link>
        <Link to="/contact">
          <i className="fa-solid fa-address-book"></i> | Contact
        </Link>
        <Link to="/sign-in">
          <i className="fa-solid fa-right-to-bracket"></i> | Sign In
        </Link>
        <Link to="/sign-up">
          <i className="fa-solid fa-user-plus"></i> | Sign Up
        </Link>

        <a href="">
          <i className="fa-solid fa-user"></i> | Kris
        </a>
      </nav>

      <button className="nav-menu-button">
        <i className="fa-solid fa-bars"></i>
      </button>
    </header>
  );
};

export default Header;
