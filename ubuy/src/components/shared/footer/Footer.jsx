import ThemeButton from "../themeButton/ThemeButton";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="side">&copy;2023 UBUY</div>
      <div className="side">Designed & Developed by Kristiyan Petsanov</div>
      <div className="side">
        <a href="https://github.com/kristiyanpts" className="link">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/kristiyanpts/" className="link">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/kristiyanpts/" className="link">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <ThemeButton />
      </div>
    </footer>
  );
};

export default Footer;
