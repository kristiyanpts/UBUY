import { NavLink } from "react-router-dom";
import ubuyLogo from "../../../assets/ubuy-logo.png";
import "./Header.css";
import { useContext, useState } from "react";
import AuthContext from "../../../core/contexts/authContext";

const Header = () => {
  const { isAuthenticated, isAdmin, isSeller, username, userId } =
    useContext(AuthContext);
  let [isMenuShown, setIsMenuShown] = useState(false);

  function toggleMenu() {
    setIsMenuShown(!isMenuShown);
  }

  return (
    <header>
      <img src={ubuyLogo} alt="" className="logo" />
      <nav className={"navlist " + (isMenuShown ? "selected" : null)}>
        <NavLink
          className={({ isActive }) => (isActive ? "active-nav" : undefined)}
          to="/"
        >
          <i className="fa-solid fa-house"></i> | Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-nav" : undefined)}
          to="/contact"
        >
          <i className="fa-solid fa-address-book"></i> | Contact
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active-nav" : undefined)}
          to="/market"
        >
          <i className="fa-solid fa-shop"></i> | Market
        </NavLink>

        {isAuthenticated && (
          <>
            {isSeller && (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-nav" : undefined
                }
                to="/create"
              >
                <i className="fa-solid fa-circle-plus"></i> | Add Listing
              </NavLink>
            )}
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-nav" : undefined
              }
              to="/cart"
            >
              <i className="fa-solid fa-cart-shopping"></i> | Cart
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-nav" : undefined
              }
              to={`/users/${userId}`}
            >
              <i className="fa-solid fa-user"></i> | {username}
            </NavLink>
            {isAdmin && (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-nav" : undefined
                }
                to="/admin/dashboard"
              >
                <i className="fa-solid fa-user-secret"></i> | Admin Panel
              </NavLink>
            )}
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-nav" : undefined
              }
              to="/sign-out"
            >
              <i className="fa-solid fa-right-from-bracket"></i> | Sign Out
            </NavLink>
          </>
        )}

        {!isAuthenticated && (
          <>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-nav" : undefined
              }
              to="/sign-in"
            >
              <i className="fa-solid fa-right-to-bracket"></i> | Sign In
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-nav" : undefined
              }
              to="/sign-up"
            >
              <i className="fa-solid fa-user-plus"></i> | Sign Up
            </NavLink>
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
