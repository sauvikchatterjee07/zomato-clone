import React from "react";
import "./CartItemNumber.css";

const CartItemNumber = ({ itemNumber }) => {
  return (
    <>
      {itemNumber > 0 && (
        <div className="cart-item-number">
          <p className="text">{itemNumber}</p>
        </div>
      )}
    </>
  );
};

export default CartItemNumber;
