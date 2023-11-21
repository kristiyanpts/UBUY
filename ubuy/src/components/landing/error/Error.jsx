import "./Error.css";
import errorGif from "../../../assets/404.gif";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-wrapper">
      <div className="title">
        Uh, oh... Looks like you entered a black hole...
      </div>
      <img src={errorGif} alt="" />
      <div className="desc">
        You entered a page that doesn&apos;t seem to exist...
      </div>
      <Link to="/" className="return-button">
        return to home page
      </Link>
    </div>
  );
};

export default Error;
