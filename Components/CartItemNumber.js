import React from "react";
import "./CartItemNumber.css";

const CartItemNumber = ({ itemNumber }) => {
  return (
    <>
      {itemNumber > 0 && (
        <div className="cart-item-number">
          <span className="count">{itemNumber}</span>
        </div>
      )}
    </>
  );
};

export default CartItemNumber;
