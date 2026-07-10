import React from "react";
import ReactDom from "react-dom/client";

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

function ResturantCard({ data }) {
  // console.log(data.resName);

  return (
    <div className="res-card">
      <img
        className="res-img"
        src="RX_THUMBNAIL/IMAGES/VENDOR/2025/12/24/d082dfab-bb70-4cc6-a96d-17e53076b8ed_481967.JPG"
      />
      <h3 className="title">{data.resName}</h3>
      <p>{data.cuisine + ","}</p>
      <h4 className="location">{data.location}</h4>
      <p>
        ⭐{data.avgRating} Ratings | {data.delieveryTime}
        {"mins"}
      </p>
      <h4> {data.costForTwo}    </h4>
    </div>
  );
}

const resturantArr = [
  {
    id: "481967",
    resName: "Olio - The Wood Fired Pizzeria",
    cuisine: [
      "Pizzas",
      "Pastas",
      "Italian",
      "Fast Food",
      "Snacks",
      "Beverages",
      "Desserts",
    ],
    avgRating: 4.1,
    delieveryTime: 51,
    costForTwo: "₹300 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/24/d082dfab-bb70-4cc6-a96d-17e53076b8ed_481967.JPG",
    location: "Beside Metro Station",
  },
  {
    id: "650820",
    resName: "Imperial Multicuisine Restaurant",
    cuisine: ["Biryani", "Chinese", "Indian", "Kebabs", "Tandoor"],
    avgRating: 4.3,
    delieveryTime: 38,
    costForTwo: "₹400 for two",
    imgId: "rqlwvsmzcfxbg9u6ajgm",
    location: "Redhills",
  },
  {
    id: "77905",
    resName: "Santosh Dhaba Exclusive",
    cuisine: ["Biryani", "Chinese", "Italian", "Mexican", "Desserts"],
    avgRating: 4.3,
    delieveryTime: 45,
    costForTwo: "₹300 for two",
    imgId: "jllcesio37olflwnvter",
    location: "ABids",
  },
  {
    id: "481968",
    resName: "Capital Multi Cuisine Restaurant",
    cuisine: ["Haleem", "Biryani", "Kebabs"],
    avgRating: 3.8,
    delieveryTime: 35,
    costForTwo: "₹250 for two",
    imgId: "ijy2jxi7lfwsebdtazpi",
    location: "Malakpet",
  },
  {
    id: "59643",
    resName: "Baskin Robbins - Ice Cream Desserts",
    cuisine: ["Desserts", "Ice Cream"],
    avgRating: 4.6,
    delieveryTime: 38,
    costForTwo: "₹300 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/724319b2-8428-4fac-ba3c-f1bc079316ef_59643.JPG",
    location: "Redhills",
  },
  {
    id: "797153",
    resName: "Domino's Pizza",
    cuisine: ["Pizzas", "Italian", "Pastas", "Desserts"],
    avgRating: 4.5,
    delieveryTime: 30,
    costForTwo: "₹400 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/11/c78af160-0e43-47b9-8c48-99818e5e30ac_797153.JPG",
    location: "Charminar",
  },
  {
    id: "341437",
    resName: "Onesta",
    cuisine: ["Italian", "Desserts", "Pizzas", "American", "Snacks"],
    avgRating: 3.6,
    delieveryTime: 49,
    costForTwo: "₹200 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/19/c27d82ae-10e4-42df-8f2b-fa4a78f1b4a0_341437.JPG",
    location: "Banjara Hills",
  },
];

function Body() {
  return (
    <div className="body">
      <div className="categories">
        <div className="categories-list" id="burger">
          <img src="https://ik.imagekit.io/sufiyanImages/cheese-burger-cartoon-vector.jpg" />
        </div>
        <div className="categories-list" id="pizza">
          <img src="https://ik.imagekit.io/sufiyanImages/pizza-slice-melted-floating-cartoon-vector-icon-illustration-food-object-icon-isolated-flat-vector_138676-10422.jpg_semt=ais_hybrid&w=740&q=80"></img>
        </div>
        <div className="categories-list" id="wrap">
          <img src="https://ik.imagekit.io/sufiyanImages/shawarma-cartoon-vector-icon-illustration-fast-food-object-icon-concept-isolated-premium_1312489-479.jpg"></img>
        </div>
        <div className="categories-list" id="biriyani">
          <img src="https://ik.imagekit.io/sufiyanImages/bowl-chicken-biryani-with-lemon-wedges-green-chilies-is-illustrated-cartoon-style_926667-4886.jpg"></img>
        </div>
        <div className="categories-list" id="momos">
          <img src="https://ik.imagekit.io/sufiyanImages/pngtree-steamed-momos-dumplings-with-spicy-sauce-cartoon-illustration-vector-png-image_21136993.png"></img>
        </div>
        <div className="categories-list" id="noodles">
          <img src="https://ik.imagekit.io/sufiyanImages/ramen-noodle-egg-meat-with-chopstick-cartoon_138676-2543.jpg_semt=ais_hybrid&w=740&q=80"></img>
        </div>
      </div>
      <div className="res-container">
        {resturantArr.map((food) => {
          return <ResturantCard data={food} />;
        })}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <h3>Footer</h3>
    </div>
  );
}
function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}
const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<App />);
