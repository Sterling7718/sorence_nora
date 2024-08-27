"use client";
import React, { useState } from "react";
import Link from "next/link";

// CustomNavLink component that handles individual link behavior
const CustomNavLink: React.FC<{ link: string; children: React.ReactNode }> = ({
  link,
  children,
}) => {
  const [isHovered, setIsHovered] = useState(false); // State to track if the link is hovered

  // Define classes for the link based on hover state
  const linkClasses = `relative transition-all duration-200 ${
    isHovered ? "text-foregroundparchment " : " opacity-40" // Change text color based on hover
  }`;

  // Left arrow shown on hover
  const leftArrow = isHovered && (
    <span className="absolute -top-1 -left-10">&lt;</span>
  );

  // Right arrow shown on hover
  const rightArrow = isHovered && (
    <span className="absolute -top-1 -right-7">/&gt;</span>
  );

  // Home icon shown on hover for the "Home" link
  const homeIcon = isHovered && children === "Home" && (
    <span className="material-symbols-outlined absolute top-0 left-[-25px]">
      home
    </span>
  );

  const skillIcon = isHovered && children === "Skills" && (
    <span className="material-symbols-outlined absolute top-0 left-[-25px]">
      stacks
    </span>
  );
  const depCode = isHovered && children === "Projects" && (
    <span className="material-symbols-outlined absolute top-0 left-[-25px]">
      deployed_code
    </span>
  );
  const accountBox = isHovered && children === "Resume" && (
    <span className="material-symbols-outlined absolute top-0 left-[-25px]">
      account_box
    </span>
  );
  const mail = isHovered && children === "Contact" && (
    <span className="material-symbols-outlined absolute top-0 left-[-25px]">
      mail
    </span>
  );

  return (
    <Link
      href={link} // Link destination
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
      onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
      className={linkClasses} // Apply computed classes
    >
      <span className="relative">
        {leftArrow}
        {children}
        {rightArrow}
        {homeIcon} {/* Render the home icon when hovered */}
        {skillIcon} {/* Render the home icon when hovered */}
        {depCode} {/* Render the home icon when hovered */}
        {accountBox} {/* Render the home icon when hovered */}
        {mail} {/* Render the home icon when hovered */}
      </span>
    </Link>
  );
};

// NavBar component that contains the navigation links
const NavBar = () => {
  return (
    <>
      {/* Add the Material Symbols stylesheet */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <nav className="font-poppins max-w-4xl mx-auto rounded-[50px] backdrop-blur-[5px] px-4 py-2 font-semibold mt-4">
        <div className="flex space-x-16 justify-center text-poppins1_5rem">
          {/* Map over an array of section names to create links */}
          {["Home", "Skills", "Projects", "Resume", "Contact"].map(
            (section, index) => (
              <CustomNavLink key={index} link={`#${section.toLowerCase()}`}>
                {section}
              </CustomNavLink>
            )
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar; // Export the NavBar component
