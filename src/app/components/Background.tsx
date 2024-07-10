// Background.jsx
"use client";
import React, { useState, useEffect } from "react";

const Background = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 }); // Initialize state for mouse position

  // Function to update mouse position
  const handleMouseMove = (event: { clientX: number; clientY: number }) => {
    setMousePos({ x: event.clientX, y: event.clientY }); // Update mouse position state on mouse move
  };

  // Add event listener to track mouse movement
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove); // Add mousemove event listener
    return () => {
      window.removeEventListener("mousemove", handleMouseMove); // Clean up event listener on component unmount
    };
  }, []);

  // Calculate distance between two points
  const getDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2); // Calculate Euclidean distance
  };

  // Calculate background glow based on mouse position
  const glowEffect = `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, #00ffff, #000b0d)`; // Create a radial gradient for the background glow effect

  return (
    <div
      style={{
        background: glowEffect, // Apply the glow effect to the background
        position: "absolute",
        height: "100%", // Full height
        width: "100%", // Full width
        top: 0,
        left: 0,
      }}
    >
      {[...Array(20)].map(
        (
          _,
          rowIndex // Create 20 rows
        ) => (
          <div
            key={rowIndex}
            style={{
              display: "inline-flex", // Inline-flex for row elements
              marginLeft: rowIndex % 2 === 0 ? "-25px" : "1px", // Adjust margin for staggered rows
              marginTop: "-20px", // Negative top margin
              overflow: "hidden", // Hide overflow
            }}
          >
            {[...Array(25)].map((_, hexIndex) => {
              // Create 25 hexagons per row
              const hexX = hexIndex * 52 + (rowIndex % 2 ? 26 : 0); // Calculate hexagon x position
              const hexY = rowIndex * 60; // Calculate hexagon y position
              const distance = getDistance(mousePos.x, mousePos.y, hexX, hexY); // Calculate distance from mouse

              return (
                <div
                  key={hexIndex}
                  style={{
                    position: "relative", // Relative positioning
                    height: "60px", // Fixed height
                    width: "50px", // Fixed width
                    background: distance < 1 ? "#00ffff" : "#000e10", // Change color based on distance
                    margin: "1px", // Margin for spacing
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", // Hexagon shape
                    boxShadow: distance < 3 ? "0 0 2px #00ffff" : "none", // Glow effect based on distance
                    transition: "2s", // Smooth transition
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transition = "0s"; // Remove transition
                    e.currentTarget.style.background = "#00ffff"; // Change background on hover
                    e.currentTarget.style.animation = "4s linear infinite"; // Add animation
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transition = "1s"; // Re-add transition
                    e.currentTarget.style.background = "#000e10"; // Reset background on leave
                    e.currentTarget.style.animation = ""; // Remove animation
                  }}
                ></div>
              );
            })}
          </div>
        )
      )}
    </div>
  );
};

export default Background;
