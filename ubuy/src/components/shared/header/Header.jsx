import ubuyLogo from "../../../assets/ubuy-logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src={ubuyLogo} alt="" className="logo" />
      <nav className="navlist">
        <a href="">
          <i className="fa-solid fa-house"></i> | Home
        </a>
        <a href="">
          <i className="fa-solid fa-shop"></i> | Market
        </a>
        <a href="">
          <i className="fa-solid fa-address-book"></i> | Contact
        </a>
        <a href="">
          <i className="fa-solid fa-right-to-bracket"></i> | Login
        </a>
        <a href="">
          <i className="fa-solid fa-user-plus"></i> | Register
        </a>

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
