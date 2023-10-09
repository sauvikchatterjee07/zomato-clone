import React, { useState } from "react";
import Section from "./Section";
import "./Dishes.css";

const Dishes = ({ dishes }) => {
  const [visibleSection, setVisibleSection] = useState("");

  const toggleVisibility = (itemCards) => {
    setVisibleSection(visibleSection === itemCards ? "" : itemCards);
  };

  return (
    <div>
      {dishes.map((obj, index) => (
        <Section
          key={index}
          obj={obj}
          isVisible={visibleSection === obj.card?.card?.itemCards}
          // setIsVisible={() => setVisibleSection(obj.card?.card?.itemCards)}
          toggleVisibility={() => toggleVisibility(obj.card?.card?.itemCards)}
        />
      ))}
    </div>
  );
};

export default Dishes;
