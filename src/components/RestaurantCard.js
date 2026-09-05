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

  // console.log("data", data);

  return (
    <div className="res-card">
      <div className="res-img-wrap">
        <img
          className="res-img"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt={name}
        />
      </div>

      <div className="res-card-body">
        <h3 className="title">{name}</h3>
        <p className="res-card-cuisines">{cuisines?.join(", ")}</p>

        <div className="res-meta">
          <span className="rating-pill">⭐ {avgRating}</span>
          <span>{sla?.deliveryTime} mins</span>
        </div>

        <h4 className="res-cost">{costForTwo}</h4>
      </div>
    </div>
  );
}

export default ResturantCard;
