// Background.jsx
"use client";
import React from "react";

const Background = () => {
  return (
    <div
      style={{
        background: "#000b0d" /* Set the background color to black */,
        position: "absolute",
        height: "100%",
        width: "100%",
        top: 0,
        left: 0,
      }}
    >
      {[...Array(20)].map((_, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            display: "inline-flex",
            marginLeft: rowIndex % 2 === 0 ? "-25px" : "1px",
            marginTop: "-20px",
            overflow: "hidden",
          }}
        >
          {[...Array(25)].map((_, hexIndex) => (
            <div
              key={hexIndex}
              style={{
                position: "relative",
                height: "60px",
                width: "50px",
                background: "#000e10",
                margin: "1px",
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                transition: "2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transition = "0s";
                e.currentTarget.style.background = "#00ffff";
                e.currentTarget.style.animation = " 4s linear infinite";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transition = "1s";
                e.currentTarget.style.background = "#000e10";
                e.currentTarget.style.animation = "";
              }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Background;
