import { Link } from "react-router";
import { logoURL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext, useState } from "react";
import Usercontext from "../utils/useContext";
import hotelListContext from "../utils/HotelListContext";

function Header() {
  const context = useContext(Usercontext);

  const { swiggyRes, setswiggyRes, allItems } = useContext(hotelListContext);
  const [filterToggle, setFilterToggle] = useState(false);
  const setFilter = () => {
    console.log("button clicked");

    if (!filterToggle) {
      const filterArray = swiggyRes.filter((restaurant) => {
        if (restaurant.info.avgRating > 4.5) {
          return true;
        } else {
          return false;
        }
      });
      setswiggyRes(filterArray);
      setFilterToggle(!filterToggle);
    } else {
      setswiggyRes(allItems);
      setFilterToggle(!filterToggle);
    }
  };

  const isOnline = useOnlineStatus();

  return (
    <div className="header">
      <Link to={"/"}>
        <div className="header-logo">
          <img src={logoURL} />
        </div>
      </Link>

      <div className="search-bar">
        <input
          type="text"
          placeholder="search here!"
          onChange={(e) => {
            const filterList = allItems.filter((restaurant) => {
              if (
                restaurant.info.name.toLowerCase().includes(e.target.value) ==
                true
              ) {
                return true;
              } else {
                return false;
              }
            });
            setswiggyRes(filterList);
          }}
        ></input>
      </div>
      <div className="nav-links">
        <ul>
          {isOnline ? <li>🟢 Online</li> : <li> 🔴 Offline</li>}

          <li>
            <button className="filter-btn" onClick={setFilter}>
              {filterToggle ? "show all restaurants" : "top rated restaurant"}
            </button>
          </li>
          <li>
            <Link to={"/home"}>Home </Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
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
          <div className="profile-logo"><li>{context.name}</li></div>
        </ul>
      </div>
    </div>
  );
}

export default Header;
