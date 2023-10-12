import React, { useEffect, useState } from "react";
import { API_END_POINT } from "../utils/dummyData";
import "./Body.css";
import RestaurantCard from "./RestaurantCard";
import SearchComponent from "./SearchComponent";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const filteredData = (searchInput, restaurants) => {
  return restaurants.filter((restaurant) => {
    return restaurant.info.name.toLowerCase().includes(searchInput);
  });
};

const Body = () => {
  const [tempListOfResturants, setTempListOfResturants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const data = await fetch(API_END_POINT);
      const json = await data.json();
      let card5Data =
        json.data.cards[5].card.card.gridElements.infoWithStyle?.restaurants;
      // console.log(card5Data);
      setRestaurants(card5Data);
      setTempListOfResturants(card5Data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function handleSearch(searchInput) {
    const filteredRes = filteredData(searchInput.toLowerCase(), restaurants);
    setTempListOfResturants(filteredRes);
    setSearchInput(searchInput);
  }

  return (
    <>
      <div className="make-content-center">
        <div className="card-contents">
          <SearchComponent
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            handleSearch={handleSearch}
          />
          <div className="restaurant-list">
            {isLoading && searchInput === "" ? (
              <Shimmer />
            ) : tempListOfResturants.length > 0 ? (
              tempListOfResturants.map((restaurant) => (
                <Link
                  to={"/restaurantmenu/" + restaurant.info.id}
                  className="restaurant-menu-details"
                >
                  <RestaurantCard
                    key={restaurant.info.id}
                    restaurant={restaurant}
                  />
                </Link>
              ))
            ) : (
              <p className="no-matches-found">No matches found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
