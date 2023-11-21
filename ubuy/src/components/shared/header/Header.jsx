import { Link } from "react-router-dom";
import ubuyLogo from "../../../assets/ubuy-logo.png";
import "./Header.css";
import { useContext, useState } from "react";
import AuthContext from "../../../core/contexts/authContext";

const Header = () => {
  const { isAuthenticated, username } = useContext(AuthContext);
  let [isMenuShown, setIsMenuShown] = useState(false);

  function toggleMenu() {
    setIsMenuShown(!isMenuShown);
  }

  return (
    <header>
      <img src={ubuyLogo} alt="" className="logo" />
      <nav className={"navlist " + (isMenuShown ? "selected" : null)}>
        <Link to="/">
          <i className="fa-solid fa-house"></i> | Home
        </Link>
        <Link to="/contact">
          <i className="fa-solid fa-address-book"></i> | Contact
        </Link>

        <Link to="/market">
          <i className="fa-solid fa-shop"></i> | Market
        </Link>

        {isAuthenticated && (
          <>
            <Link to="/create">
              <i className="fa-solid fa-circle-plus"></i> | Add Listing
            </Link>
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping"></i> | Cart
            </Link>
            <Link to="/users/test">
              <i className="fa-solid fa-user"></i> | {username}
            </Link>
            <Link to="/sign-out">
              <i className="fa-solid fa-right-from-bracket"></i> | Sign Out
            </Link>
          </>
        )}

        {!isAuthenticated && (
          <>
            <Link to="/sign-in">
              <i className="fa-solid fa-right-to-bracket"></i> | Sign In
            </Link>
            <Link to="/sign-up">
              <i className="fa-solid fa-user-plus"></i> | Sign Up
            </Link>
          </>
        )}
      </nav>

      <button className="nav-menu-button" onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </button>
    </header>
  );
};

export default Header;
