import React, { useState } from "react";
import "./Arrow.css";

const Arrow = () => {
  const [isUp, setIsUp] = useState(true);

  const toggleArrow = () => {
    setIsUp(!isUp);
  };

  return (
    <div
      className={`toggle-button ${isUp ? "active" : ""}`}
      onClick={toggleArrow}
    >
      <div className="arrow"></div>
    </div>
  );
};

export default Arrow;
