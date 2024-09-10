"use client";
import React, { useState, useEffect } from "react";

// Define the Background component
const Background = () => {
  // Define a state to track the mouse position, starting with (0,0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Function to update the mouse position when the user moves the mouse
  const handleMouseMove = (event: { clientX: number; clientY: number }) => {
    setMousePos({ x: event.clientX, y: event.clientY });
  };

  // useEffect to set the initial mouse position to the center of the screen and listen for mouse movements
  useEffect(() => {
    // Ensure we're in a browser environment
    if (typeof window !== "undefined") {
      // Set initial mouse position to center of the viewport
      setMousePos({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
      // Add event listener to track mouse movements
      window.addEventListener("mousemove", handleMouseMove);
    }
    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []); // Empty dependency array ensures this effect only runs once on mount and cleanup on unmount

  // Function to calculate the distance between two points (x1, y1) and (x2, y2)
  const getDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2); // Pythagorean theorem
  };

  // Define a radial glow effect, centered around the current mouse position
  const glowEffect = `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, #00ffff 10%, #000b0d 60%)`;

  // Return the JSX for the background and hexagonal grid
  return (
    // The outermost div which serves as the glowing background
    <div
      style={{
        background: glowEffect, // Apply the glow effect as a background
        position: "fixed", // Fixed position ensures it covers the entire viewport
        height: "100%", // Full viewport height
        width: "100%", // Full viewport width
        top: 0, // Positioned at the top of the viewport
        left: 0, // Positioned at the left of the viewport
        zIndex: -50, // Z-index to place it behind other components
      }}
    >
      {/* Create 20 rows of hexagons using Array(20) */}
      {[...Array(45)].map((_, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            display: "inline-flex", // Each row of hexagons will be displayed inline-flex
            marginLeft: rowIndex % 2 === 0 ? "-25px" : "1px", // Offset the hexagons to create a staggered effect
            marginTop: "-20px", // Add a margin between rows
            overflow: "hidden", // Prevent overflow of hexagons outside the div
          }}
        >
          {/* For each row, create 25 hexagons */}
          {[...Array(30)].map((_, hexIndex) => {
            // Calculate the hexagon's x and y position on the grid
            const hexX = hexIndex * 52 + (rowIndex % 2 ? 26 : 0); // Stagger hexagons horizontally
            const hexY = rowIndex * 60; // Space hexagons vertically

            // Calculate the distance between the current hexagon and the mouse position
            const distance = getDistance(mousePos.x, mousePos.y, hexX, hexY);

            // Return the individual hexagon div
            return (
              <div
                key={hexIndex}
                style={{
                  position: "relative", // Each hexagon is positioned relative to its container
                  height: "60px", // Hexagon height
                  width: "50px", // Hexagon width
                  background: "#000e10", // Hexagon background color (default)
                  margin: "1px", // Space between hexagons
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", // Clip path to create the hexagon shape
                  boxShadow: distance < 2 ? "0 0 2px #00ffff" : "none", // Add glow if hexagon is close to the mouse
                  transition: "2s", // Smooth transition of the glow effect
                }}
                className="lg:h-[120px] xl:w-[100px]"
              ></div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Background;
