import React from "react";
import { IMG_CDN_URL } from "../utils/dummyData";
import "./RestaurantCard.css";

const RestaurantCard = (props) => {
  const avgRating =
    props.restaurant.info?.avgRating == undefined
      ? "NA"
      : props.restaurant.info?.avgRating;
  let bgColor = "green";
  if (avgRating >= 4) {
    bgColor = "green";
  } else if (avgRating >= 3 && avgRating <= 3.9) {
    bgColor = "rgb(10, 205, 23)";
  } else if (avgRating >= 1 && avgRating <= 2.9) {
    bgColor = "rgb(200, 255, 0)";
  } else {
    bgColor = "red";
  }
  // console.log(props);
  return (
    <>
      <div className="outer-div">
        <div className="Card">
          <img
            src={IMG_CDN_URL + props.restaurant.info?.cloudinaryImageId}
            alt="restaurantImage"
          />
          <br />
          <br />
          <div className="alignH2">
            <h2>
              {props.restaurant.info?.name.length > 20
                ? `${props.restaurant.info?.name.slice(0, 18)}...`
                : props.restaurant.info?.name}
            </h2>
            <h2 id="star" style={{ backgroundColor: bgColor }}>
              {" "}
              {avgRating}⭐
            </h2>
          </div>
          <div className="alignH3">
            <h3>{props.restaurant.info?.cuisines.slice(0, 2).join(", ")}</h3>
            <h3>{props.restaurant.info?.costForTwo}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
