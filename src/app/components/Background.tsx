// Background.jsx
"use client";
import React, { useState, useEffect } from "react";

const Background = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 }); // Initialize state for mouse position

  // Function to update mouse position
  const handleMouseMove = (event: { clientX: number; clientY: number }) => {
    setMousePos({ x: event.clientX, y: event.clientY });
  };

  // Set initial mouse position to the center on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      setMousePos({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  // Calculate distance between two points
  const getDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  };

  // Calculate background glow based on mouse position with a smaller effect
  const glowEffect = `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, #00ffff 10%, #000b0d 60%)`; // Adjust color stops for a smaller glow

  return (
    <div
      style={{
        background: glowEffect, // Apply the glow effect to the background
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
          {[...Array(25)].map((_, hexIndex) => {
            const hexX = hexIndex * 52 + (rowIndex % 2 ? 26 : 0);
            const hexY = rowIndex * 60;
            const distance = getDistance(mousePos.x, mousePos.y, hexX, hexY);

            return (
              <div
                key={hexIndex}
                style={{
                  position: "relative",
                  height: "60px",
                  width: "50px",
                  background: distance < 1 ? "#00ffff" : "#000e10",
                  margin: "1px",
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  boxShadow: distance < 3 ? "0 0 2px #00ffff" : "none", // Modify the glow size here
                  transition: "2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transition = "0s";
                  e.currentTarget.style.background = "#00ffff";
                  e.currentTarget.style.animation = "4s linear infinite";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transition = "1s";
                  e.currentTarget.style.background = "#000e10";
                  e.currentTarget.style.animation = "";
                }}
              ></div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Background;
