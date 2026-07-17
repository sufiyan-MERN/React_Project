import React from "react";
import { imgBaseURL } from "../utils/constants";

const MenuItems = ({ details }) => {
  console.log("details", details);

  const { name, defaultPrice, ratings, description, imageId } = details;

  return (
    <div className="menu-item-categories">
      <div className="menu-item-card">
        <h1> {name} </h1>
        <p> {defaultPrice} </p>
        <p>
          {ratings?.aggregatedRating?.rating}
          {ratings?.aggregatedRating?.ratingCount}
        </p>
        <p>{description}</p>
      </div>
      <div className="menu-item-img">
        <img src={imgBaseURL + imageId} />
      </div>
    </div>
  );
};

export default MenuItems;
