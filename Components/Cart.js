import React from "react";
import { useSelector } from "react-redux";
import logo from "../Assets/ZomatoLogo.png";
import { selectItemCount } from "../utils/cartSlice";
import { IMG_CDN_URL } from "../utils/dummyData";
import AddToCartCartComponent from "./AddToCartCartComponent";
import "./cart.css";
import OrderSummary from "./OrderSummary";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const itemCount = useSelector(selectItemCount);

  const uniqueItems = {};

  cartItems.forEach((item) => {
    if (!uniqueItems[item.id]) {
      uniqueItems[item.id] = item;
    }
  });

  const uniqueCartItems = Object.values(uniqueItems);

  return !cartItems.length > 0 ? (
    <EmptyCart />
  ) : (
    <div className="cart-main">
      <div className="cart-container">
        <div className="cart-items">
          {uniqueCartItems.map((obj) => {
            console.log(obj.imageId);
            return (
              <div className="main-section-content" key={obj.id}>
                <div className="main-section-left">
                  <h2 className="dish-name">{obj.name}</h2>
                  <h2 className="dish-price">₹{obj.price / 100}</h2>
                  <p className="dish-description">{obj.description}</p>
                </div>
                <div className="main-section-right">
                  {!obj.imageId ? (
                    <img src={logo} className="image" alt={obj.imageId} />
                  ) : (
                    <img
                      src={IMG_CDN_URL + obj.imageId}
                      className="image"
                      alt={obj.imageId}
                    />
                  )}
                  <div className="add-to-cart-container">
                    <AddToCartCartComponent item={obj} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="order-summary-card">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Cart;
