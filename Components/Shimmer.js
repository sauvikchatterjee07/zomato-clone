import React from "react";
import "./shimmer.css";

const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {" "}
      {/* Update the parent class */}
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
  );
};

export default Shimmer;
