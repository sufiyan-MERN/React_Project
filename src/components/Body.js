import ResturantCard from "./RestaurantCard";
import { restaurantArr } from "../utils/mockdata";
import Shimmer from "./Shimmer";
import { swiggyURL } from "../utils/constants";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import hotelListContext from "../utils/HotelListContext";

function Body() {
  // const [swiggyRes, setswiggyRes] = useState(null);

  const { swiggyRes, setswiggyRes, setAllItems } = useContext(hotelListContext);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(swiggyURL);
    const data = await response.json();
    console.log(
      data.data.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
    setswiggyRes(
      data.data.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
    setAllItems(
      data.data.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
    console.log("hi", swiggyRes);
  };

  if (swiggyRes == null) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <section className="home-hero">
        <div className="hero-content">
          <span className="hero-badge">Fresh & fast</span>
          <h1 className="hero-title">Good food, delivered with a smile.</h1>
          <p className="hero-subtitle">
            Find your next favorite meal from trending local picks and comfort
            food classics.
          </p>
          <div className="hero-actions">
            <button className="primary-btn">Order now</button>
            <button className="secondary-btn">View menu</button>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="floating-card card-one">
            <span>⭐ 4.8</span>
            <small>Top rated</small>
          </div>
          <div className="floating-card card-two">
            <span>15 min</span>
            <small>Fast delivery</small>
          </div>
        </div>
      </section>

      {/* <div className="categories">
        <div className="categories-list" id="burger">
          <img
            src="https://ik.imagekit.io/sufiyanImages/images_q=tbn:ANd9GcTGNAoEKWGZpxpt5j1CcTmjQxSIpiJAxMwx45NOLeYCIA&s=10"
            alt="Burger"
          />
          <span>Burger</span>
        </div>
        <div className="categories-list" id="pizza">
          <img
            src="https://ik.imagekit.io/sufiyanImages/pizza-slice-melted-floating-cartoon-vector-icon-illustration-food-object-icon-isolated-flat-vector_138676-10422.jpg_semt=ais_hybrid&w=740&q=80"
            alt="Pizza"
          />
          <span>Pizza</span>
        </div>
        <div className="categories-list" id="wrap">
          <img
            src="https://ik.imagekit.io/sufiyanImages/shawarma-cartoon-vector-icon-illustration-fast-food-object-icon-concept-isolated-premium_1312489-479.jpg"
            alt="Wrap"
          />
          <span>Wrap</span>
        </div>
        <div className="categories-list" id="biriyani">
          <img
            src="https://ik.imagekit.io/sufiyanImages/bowl-chicken-biryani-with-lemon-wedges-green-chilies-is-illustrated-cartoon-style_926667-4886.jpg"
            alt="Biriyani"
          />
          <span>Biriyani</span>
        </div>
        <div className="categories-list" id="momos">
          <img
            src="https://ik.imagekit.io/sufiyanImages/images_q=tbn:ANd9GcTZaPKA0Efcd4L2Ep7FdR8uaKEdhH5NdM5uuS1WA_JWlw&s=10"
            alt="Momos"
          />
          <span>Momos</span>
        </div>
        <div className="categories-list" id="noodles">
          <img
            src="https://ik.imagekit.io/sufiyanImages/ramen-noodle-egg-meat-with-chopstick-cartoon_138676-2543.jpg_semt=ais_hybrid&w=740&q=80"
            alt="Noodles"
          />
          <span>Noodles</span>
        </div>
      </div> */}
      <div className="res-container">
        {swiggyRes.map((resDetails) => {
          console.log("resdetails", resDetails);
          return (
            <Link
              className="res-menu-card"
              to={`/restaurantMenu/${resDetails?.info?.id}`}
              key={resDetails?.info?.id}
            >
              <ResturantCard data={resDetails?.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Body;
