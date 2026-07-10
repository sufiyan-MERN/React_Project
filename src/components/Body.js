import ResturantCard from "./RestaurantCard";
import { restaurantArr } from "../utils/mockdata";
import Shimmer from "./Shimmer";
import { swiggyURL } from "../utils/constants";
import { useEffect, useState } from "react";

function Body() {
  const [swiggyRes, setswiggyRes] = useState(null);

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
    console.log("hi", swiggyRes);
  };

  if (swiggyRes == null) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="categories">
        <div className="categories-list" id="burger">
          <img src="https://ik.imagekit.io/sufiyanImages/images_q=tbn:ANd9GcTGNAoEKWGZpxpt5j1CcTmjQxSIpiJAxMwx45NOLeYCIA&s=10" />
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
          <img src="https://ik.imagekit.io/sufiyanImages/images_q=tbn:ANd9GcTZaPKA0Efcd4L2Ep7FdR8uaKEdhH5NdM5uuS1WA_JWlw&s=10"></img>
        </div>
        <div className="categories-list" id="noodles">
          <img src="https://ik.imagekit.io/sufiyanImages/ramen-noodle-egg-meat-with-chopstick-cartoon_138676-2543.jpg_semt=ais_hybrid&w=740&q=80"></img>
        </div>
      </div>
      {/* <button onClick={getData}>getdata</button> */}

      <div className="res-container">
        {/* {restaurantArr.map((food) => {
          return <ResturantCard key={food.id} data={food} />;
        })} */}

        {swiggyRes.map((resDetails) => {
          return (
            <ResturantCard data={resDetails?.info} key={resDetails?.info?.id} />
          );
        })}
      </div>
    </div>
  );
}

export default Body;
