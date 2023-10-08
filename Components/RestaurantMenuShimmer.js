import React from "react";
import "./RestaurantMenuShimmer.css";

const RestaurantMenuShimmer = () => {
  return (
    <>
      <div>
        <div className="name"></div>
        <div className="price"></div>
        <div className="desc"></div>
      </div>
      <div className="restaurant-list">
        {Array(9)
          .fill("")
          .map((_, index) => (
            <div className="restaurant-shimmer-card" key={index}>
              <div className="restaurant-shimmer-img"></div>
              <div className="restaurant-shimmer-text"></div>
              <div className="restaurant-shimmer-text"></div>
            </div>
          ))}
      </div>
    </>
  );
};

export default RestaurantMenuShimmer;
