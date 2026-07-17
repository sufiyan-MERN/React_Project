import React, { useState } from "react";
import MenuItems from "./MenuItems";

const RestaurantCategory = ({ categoryinfo, order, setIndex }) => {
  const { title, itemCards } = categoryinfo;

  // const [isopen, setIsOpen] = useState(false);

  let isopen = order;

  const toggleBody = () => {
    // setIsOpen(!isopen);\
    setIndex();
  };

  return (
    <div className="category-accodian">
      <div className="category-header" onClick={toggleBody}>
        <span>
          {title} ({itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      {isopen ? (
        <div className="category-body">
          {itemCards.map((singleMenu) => {
            return (
              <MenuItems
                key={singleMenu?.card?.info?.id}
                details={singleMenu?.card?.info}
              />
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default RestaurantCategory;
