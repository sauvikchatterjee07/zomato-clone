import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import "./Restaurantmenu.css";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [cardZeroData, setCardZeroData] = useState(null);
  const { resid } = useParams();

  const getMenuDetails = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2296337&lng=87.8758417&restaurantId=" +
          resid +
          "&catalog_qa=undefined&submitAction=ENTER"
      );
      const json = await response.json();
      const data = json.data;
      // console.log(data.cards[0]?.card?.card?.info);

      setRestaurantMenu(data);
      helper(data);
    } catch (error) {
      console.error("Error fetching menu details: ", error);
    }
  };

  useEffect(() => {
    getMenuDetails();
  }, []);

  const helper = (data) => {
    console.log(data.cards[0]?.card?.card?.info);
    setCardZeroData(data.cards[0]?.card?.card?.info);
  };

  return !cardZeroData ? (
    <div className="make-content-center">
      <div className="card-content">
        <Shimmer />
      </div>
    </div>
  ) : (
    <div className="make-content-center">
      <div className="card-content">
        <div className="restaurant-details-top-left">
          <h1>{cardZeroData.name}</h1>
          {cardZeroData.cuisines.map((cuisine) => (
            <div>
              <h2>{cuisine}</h2>
            </div>
          ))}
          <h2>{cardZeroData.areaName}</h2>
          <h2>{cardZeroData.feeDetails.message}</h2>
        </div>
        <div className="restaurant-details-top-right">
          <h3>⭐{" " + cardZeroData.avgRatingString}</h3>
          <h3>{cardZeroData.totalRatingsString}</h3>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
