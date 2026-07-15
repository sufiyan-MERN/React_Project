// import React from "react";
// import { useParams } from "react-router";
// import { MenuAPI } from "../utils/constants";
// import { useEffect, useState } from "react";

// const RestaurantPage = () => {
//   const { resId } = useParams();

//   const [menu, setMenu] = useState(null);

//   useEffect(() => {
//     getRestaurantMenu();
//   }, []);

//   const getRestaurantMenu = async () => {
//     const rawData = await fetch(MenuAPI + resId);
//     const data = await rawData.json();
//     console.log(data);
//     setMenu(data.data?.cards[0]?.card);
//   };

//   return <div>he ll</div>;
// };

// export default RestaurantPage;
