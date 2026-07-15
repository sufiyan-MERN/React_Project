import React from "react";
import { useParams } from "react-router";
import { imgBaseURL, menuAPI, menuURL } from "../utils/constants";
import { useEffect, useState } from "react";
import RestaurantMenuInfoCard from "./RestaurantMenuInfoCard";
import ShimmerMEnu from "./shimmerMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  // console.log(resId);

  const [menu, setMenu] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const getRestaurantMenu = async () => {
    const rawData = await fetch(menuAPI + resId);
    const data = await rawData.json();
    // console.log(data.data?.cards[2]?.card?.card?.info);
    setMenu(data);
  };

  if (menu === null) {
    return <ShimmerMEnu />;
  }

  const { name, locality, cuisines, totalRatingsString, cloudinaryImageId } =
    menu?.data?.cards[2]?.card?.card?.info;

  return (
    <div>
      <RestaurantMenuInfoCard menu={menu} />
    </div>
  );
};

export default RestaurantMenu;
