import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import "./restaurantmenu.css";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [biryanis, setBiryanis] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { resid } = useParams();

  const getMenuDetails = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2296337&lng=87.8758417&restaurantId=" +
        resid +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await response.json();
    const data = json.data;
    const biryaniItems =
      data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
        ?.itemCards || [];
    setRestaurantMenu(data);
    setBiryanis(biryaniItems);
    setIsLoading(false);
  };

  useEffect(() => {
    getMenuDetails();
  }, []);

  return isLoading ? (
    <Shimmer />
  ) : (
    <>
      <div className="menu-main">
        <h1 className="menu-heading">
          Menu of {restaurantMenu.cards[0].card.card.info.name}{" "}
        </h1>
        <ul className="menu-items">
          {biryanis.map((item, index) => (
            <li key={index}>
              {item.card.info.name}
              &nbsp;&nbsp;&nbsp; ₹ {item.card.info.price / 100}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
