import React, { useState } from "react";
import AddToCart from "./AddToCart";
import { IMG_CDN_URL } from "../utils/dummyData";
import Arrow from "./Arrow";
import "./Dishes.css";
import logo from "../Assets/ZomatoLogo.png";

const Section = ({ obj, isVisible, toggleVisibility }) => {
  return (
    <>
      {obj.card?.card?.itemCards && (
        <div className="recommended-section">
          <div className="top-section">
            <h1 className="recommended">
              {obj.card?.card?.title} ({obj.card?.card?.itemCards?.length || 0})
            </h1>
            <div onClick={toggleVisibility}>
              <Arrow />
            </div>
          </div>
          {isVisible && (
            <div className="main-section">
              <div className="inner-container">
                {obj.card?.card?.itemCards?.map((item, itemIndex) => (
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
                      {!item.card.info.imageId ? (
                        <img
                          src={logo}
                          className="image"
                          alt={item.card.info.name}
                        />
                      ) : (
                        <img
                          src={IMG_CDN_URL + item.card.info.imageId}
                          className="image"
                          alt={item.card.info.name}
                        />
                      )}
                      <div className="add-to-cart-container">
                        <AddToCart item={item} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Section;
