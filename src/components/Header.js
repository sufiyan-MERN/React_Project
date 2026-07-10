function Header() {
  return (
    <div className="header">
      <div id="header-logo">
        <img src="https://ik.imagekit.io/sufiyanImages/299-2993275_food-order-icon-food-order-logo.png" />
      </div>

      <div className="search-bar">
        <input type="text" placeholder="search here!"></input>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About-us</a>
          </li>
          <li>
            <a href="">Contact-us</a>
          </li>
          <li>
            <a href="">Help</a>
          </li>
          <li>
            <a href="">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
