import { Link } from "react-router";
import { logoURL } from "../utils/constants";

function Header() {
  return (
    <div className="header">
      <Link to={"/"}>
        <div className="header-logo">
          <img src={logoURL} />
        </div>
      </Link>

      <div className="search-bar">
        <input type="text" placeholder="search here!"></input>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to={"/home"}>Home </Link>
          </li>
          <li>
            <Link to={"/about"}>About-us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact-us</Link>
          </li>
          <li>
            <a href="">Help</a>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
