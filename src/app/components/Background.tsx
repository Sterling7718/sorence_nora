import React from "react";
import "./Background.css";

const Background = () => {
  return (
    <div className="container">
      {[...Array(20)].map((_, rowIndex) => (
        <div
          key={rowIndex}
          className={`row ${rowIndex % 2 === 0 ? "" : "altline"}`}
        >
          {[...Array(25)].map((_, hexIndex) => (
            <div key={hexIndex} className="hexagon"></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Background;
