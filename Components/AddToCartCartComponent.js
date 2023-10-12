import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, selectItemCount } from "../utils/cartSlice";
import "./AddToCart.css";

const AddToCartCartComponent = ({ item }) => {
  const itemCount = useSelector(selectItemCount);

  const dispatch = useDispatch();

  const handleMinusClick = () => {
    if (itemCount[item.id] > 0) {
      dispatch(removeItem(item));
    }
  };

  const handlePlusClick = () => {
    dispatch(addItem(item));
  };

  return (
    <div className="add-to-cart">
      <div className="minus" onClick={handleMinusClick}>
        -
      </div>
      <div className="center"> {itemCount[item.id] || "Add"}</div>
      <div className="plus" onClick={handlePlusClick}>
        +
      </div>
    </div>
  );
};

export default AddToCartCartComponent;
