import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const EmptyCart = () => {
  return (
    <div style={styles.container}>
      <FontAwesomeIcon icon={faShoppingCart} style={styles.icon} />
      <p style={styles.text}>Your cart is empty</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
  },
  icon: {
    fontSize: "48px",
    marginBottom: "20px",
    color: "rgb(227, 52, 66)",
  },
  text: {
    fontSize: "18px",
    color: "#666",
  },
};

export default EmptyCart;
