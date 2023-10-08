import React from "react";
import "./Recommended.css";
import { IMG_CDN_URL } from "../utils/dummyData";
import AddToCart from "./AddToCart";

const Recommended = (recommended) => {
  //   console.log(recommended.recommended.card.card.title);
  return (
    <div className="recommended-section">
      <h1 className="recommended">
        {recommended.recommended.card.card.title +
          " (" +
          recommended.recommended.card.card.itemCards.length +
          ")"}
      </h1>
      <div className="main-section">
        {recommended.recommended.card.card.itemCards.map((obj) => {
          return (
            <div className="main-section-content">
              <div className="main-section-left">
                <h2 className="dish-name">{obj.card.info.name}</h2>
                <h2 className="dish-price">
                  {"₹" + obj.card.info.price / 100}
                </h2>
                <h2 className="dish-description">
                  {obj.card.info.description}
                </h2>
              </div>
              <div className="main-section-right">
                {obj.card.info.imageId && (
                  <img
                    src={IMG_CDN_URL + obj.card.info.imageId}
                    className="image"
                    alt=""
                  />
                )}
                <div className="add-to-cart-container">
                  <AddToCart />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recommended;
