import React from "react";
import logo from "../Assets/ZomatoLogo.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="headerElement">
        <Link to="/" className="logo">
          <img src={logo} alt="logo"></img>
        </Link>
        <ul>
          <Link to="/cart" className="list-items">
            <li className="list-text">Cart</li>
          </Link>
          <Link to="/about" className="list-items">
            <li className="list-text">About Us</li>
          </Link>
          <Link to="/contact" className="list-items">
            <li className="list-text">Contact Us</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
