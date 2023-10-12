import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  removeItem,
  selectCardCount,
  selectItemCount,
} from "../utils/cartSlice";
import "./AddToCart.css";

const AddToCart = ({ item }) => {
  // const cardCount = useSelector(selectCardCount);

  const itemCount = useSelector(selectItemCount);

  const dispatch = useDispatch();

  const handleMinusClick = () => {
    if (itemCount[item.card.info.id] > 0) {
      dispatch(removeItem(item.card.info));
    }
  };

  const handlePlusClick = () => {
    dispatch(addItem(item.card.info));
  };

  return (
    <div className="add-to-cart">
      <div className="minus" onClick={handleMinusClick}>
        -
      </div>
      <div className="center"> {itemCount[item.card.info.id] || "Add"}</div>
      <div className="plus" onClick={handlePlusClick}>
        +
      </div>
    </div>
  );
};

export default AddToCart;
