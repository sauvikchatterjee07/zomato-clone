import React, { useState } from "react";
import "./AddToCart.css";

const AddToCart = () => {
  const [cardCount, setCardCount] = useState(0);

  const handleMinusClick = () => {
    if (cardCount > 0) {
      setCardCount(cardCount - 1);
    }
  };

  const handlePlusClick = () => {
    setCardCount(cardCount + 1);
  };

  return (
    <div className="add-to-cart">
      <div className="minus" onClick={handleMinusClick}>
        -
      </div>
      <div className="center">{cardCount === 0 ? "Add" : cardCount}</div>
      <div className="plus" onClick={handlePlusClick}>
        +
      </div>
    </div>
  );
};

export default AddToCart;
