function ResturantCard({ data }) {
  // console.log(data.resName);

  return (
    <div className="res-card">
      <img
        className="res-img"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.imgId}`}
      />
      <h3 className="title">{data.resName}</h3>
      <p>{data.cuisine + ","}</p>
      <h4 className="location">{data.location}</h4>
      <p>
        ⭐{data.avgRating} Ratings | {data.delieveryTime}
        {"mins"}
      </p>
      <h4> {data.costForTwo} </h4>
    </div>
  );
}

export default ResturantCard;
