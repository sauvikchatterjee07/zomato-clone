import React from "react";
import { IMG_CDN_URL } from "../utils/dummyData";
import AddToCart from "./AddToCart";
import "./Dishes.css";

const Dishes = ({ dishes }) => {
  return (
    <div>
      {dishes.map((obj, index) => {
        console.log(obj); // Log obj for each iteration
        return (
          obj.card.card.itemCards && (
            <div className="recommended-section" key={index}>
              <h1 className="recommended">
                {obj.card?.card?.title} (
                {obj.card?.card?.itemCards?.length || 0})
              </h1>
              <div className="main-section">
                {/* Encapsulate inner map items within a div */}
                <div className="inner-container">
                  {obj.card?.card?.itemCards?.map((item, itemIndex) => {
                    console.log(item); // Log item for each iteration
                    return (
                      <div className="main-section-content" key={itemIndex}>
                        <div className="main-section-left">
                          <h2 className="dish-name">{item.card.info.name}</h2>
                          <h2 className="dish-price">
                            ₹{item.card.info.price / 100}
                          </h2>
                          <p className="dish-description">
                            {item.card.info.description}
                          </p>
                        </div>
                        <div className="main-section-right">
                          {item.card.info.imageId && (
                            <img
                              src={IMG_CDN_URL + item.card.info.imageId}
                              className="image"
                              alt={item.card.info.name}
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
            </div>
          )
        );
      })}
    </div>
  );
};

export default Dishes;
