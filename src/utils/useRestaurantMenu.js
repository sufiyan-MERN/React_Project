import { useState, useEffect } from "react";
import { menuAPI } from "./constants";

const useRestaurantMenu = (resId) => {
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

  return menu;
};

export default useRestaurantMenu;
