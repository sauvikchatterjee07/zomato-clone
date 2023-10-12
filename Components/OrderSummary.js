import React from "react";
import "./OrderSummary.css";
import { useSelector } from "react-redux";

const OrderSummary = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="order-summary">
      <div className="heading">
        <h1>Order Summary</h1>
      </div>
      <div className="charges">
        <div className="price">
          <p>Price</p>
          <p>
            {cartItems.length > 0 && (
              <>
                ₹
                {cartItems
                  .reduce((sum, item) => {
                    return sum + item.price / 100;
                  }, 0)
                  .toFixed(2)}
              </>
            )}
          </p>
        </div>
        <div className="discount">
          <p>Discount(10%)</p>
          <p>
            {cartItems.length > 0 && (
              <>
                - ₹
                {(
                  cartItems.reduce((sum, item) => {
                    return sum + item.price / 100;
                  }, 0) * 0.1
                ).toFixed(2)}
              </>
            )}
          </p>
        </div>
        <div className="delivery-charges">
          <p>Delivery Charges(5%)</p>
          <p>
            {cartItems.length > 0 && (
              <>
                + ₹
                {(
                  cartItems.reduce((sum, item) => {
                    return sum + item.price / 100;
                  }, 0) * 0.05
                ).toFixed(2)}
              </>
            )}
          </p>
        </div>
        <p className="you-will-be-saving">
          <span>You'll be saving</span>
          {cartItems.length > 0 && (
            <>
              {" "}
              ₹
              {(
                cartItems.reduce((sum, item) => {
                  return sum + item.price / 100;
                }, 0) * 0.1
              ).toFixed(2)}
            </>
          )}{" "}
          in this order 🎉🥳
        </p>
        <div className="total-payable-amount">
          <p>Total Amount</p>
          <p id="amt">
            {cartItems.length > 0 && (
              <>
                ₹
                {(
                  cartItems.reduce((sum, item) => {
                    return sum + item.price / 100;
                  }, 0) -
                  cartItems.reduce((sum, item) => {
                    return sum + item.price / 100;
                  }, 0) *
                    0.1 +
                  cartItems.reduce((sum, item) => {
                    return sum + item.price / 100;
                  }, 0) *
                    0.05
                ).toFixed(2)}
              </>
            )}
          </p>
        </div>
        <div className="button">
          <button className="button-place-order">
            <h1>Place Order</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
