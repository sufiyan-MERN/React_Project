import React from "react";
import { imgBaseURL } from "../utils/constants";

const RestaurantMenuInfoCard = ({ menu }) => {
  console.log(menu?.data?.cards[2]?.card?.card?.info);

  const {
    name,
    locality,
    cuisines,
    totalRatingsString,
    cloudinaryImageId,
    sla,
    timingsInfo,
  } = menu?.data?.cards[2]?.card?.card?.info;

  return (
    <div className="menu-info">
      <div className="menu-info-card">
        <h1 className="menu-card-name">{name}</h1>
        <img src={imgBaseURL + cloudinaryImageId} />
        <h3>Area: {locality}</h3>

        <h3>
          {" "}
          🌟 ({totalRatingsString}) || {sla.deliveryTime} Mins{" "}
        </h3>
        <hr className="menu-card-line" />
        <ul>
          <li>{timingsInfo.message}</li>
          <li>{timingsInfo.status}</li>
        </ul>
        <p>{cuisines?.join(", ")}</p>
      </div>
    </div>
  );
};

export default RestaurantMenuInfoCard;
