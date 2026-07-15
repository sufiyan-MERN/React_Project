function ResturantCard({ data }) {
  const {
    id,
    areaName,
    avgRating,
    costForTwo,
    cuisines,
    locality,
    sla,
    name,
    cloudinaryImageId,
  } = data;

  // console.log(data.resName);

  return (
    <div className="res-card">
      <img
        className="res-img"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3 className="title">{name}</h3>
      <p className="res-card-cuisines">{cuisines?.join(", ")}</p>
      {/* <h4 className="location">{locality}</h4> */}
      <p>
        ⭐{avgRating} Ratings | {sla.deliveryTime} mins
      </p>
      <h4> {costForTwo} </h4>
    </div>
  );
}

export default ResturantCard;
