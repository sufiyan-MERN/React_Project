import React from "react";
import { useParams } from "react-router";
import { imgBaseURL, menuAPI, menuURL } from "../utils/constants";
import { useEffect, useState } from "react";
import RestaurantMenuInfoCard from "./RestaurantMenuInfoCard";
import ShimmerMEnu from "./shimmerMenu";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);
  const menu = useRestaurantMenu(resId);

  if (menu === null) {
    return <ShimmerMEnu />;
  }

  // console.log(menu);

  const categories =
    menu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) => {
        if (
          category?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) {
          return true;
        } else {
          return false;
        }
      },
    );

  const { name, locality, cuisines, totalRatingsString, cloudinaryImageId } =
    menu?.data?.cards[2]?.card?.card?.info;

  return (
    <div>
      <RestaurantMenuInfoCard menu={menu} />

      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            setIndex={() => {
              setShowIndex(index === showIndex ? null : index);
            }}
            order={index === showIndex ? true : false}
            key={category.card.card.categoryId}
            categoryinfo={category.card.card}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
