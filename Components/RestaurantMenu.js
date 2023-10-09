import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dishes from "./Dishes";
import RestaurantMenuShimmer from "./RestaurantMenuShimmer";
import "./Restaurantmenu.css";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [cardZeroData, setCardZeroData] = useState(null);
  const [dishes, setDishes] = useState(null);
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
    // console.log(data.cards[0]?.card?.card?.info);
    setCardZeroData(data.cards[0]?.card?.card?.info);
    setDishes(data.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards);
    // console.log(data.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards);
  };

  return !cardZeroData ? (
    <div className="make-content-center">
      <div className="card-content">
        <RestaurantMenuShimmer />
      </div>
    </div>
  ) : (
    <div className="make-content-center">
      <div className="card-content">
        <div className="restaurant-details">
          <div className="restaurant-details-top-left">
            <h1 id="restaurant-name">{cardZeroData.name}</h1>
            <h2 className="h2 cuisine-names">
              {cardZeroData.cuisines.join(", ")}
            </h2>
            <h2 className="h2 area-name">{cardZeroData.areaName}</h2>
            <h2 className="h2 message">{cardZeroData.feeDetails.message}</h2>
          </div>
          <div className="restaurant-details-top-right">
            <div className="top-right-content">
              <div className="avg-star-rating-box">
                <h3 className="star-box-avgstar-rating">
                  ⭐{" " + cardZeroData.avgRatingString}
                </h3>
              </div>
              <h3 className="star-box-total-rating">
                {cardZeroData.totalRatingsString}
              </h3>
            </div>
          </div>
        </div>

        <hr id="hr" />

        <Dishes dishes={dishes} />
      </div>
    </div>
  );
};

export default RestaurantMenu;
