"use client";
import React, { useState } from "react";
import Link from "next/link";

// Define a mapping object to handle icon display based on the link text
const iconMap: { [key: string]: string } = {
  Home: "home",
  Skills: "stacks",
  Projects: "deployed_code",
  Resume: "account_box",
  Contact: "mail",
};

// CustomNavLink component that handles individual link behavior
const CustomNavLink: React.FC<{ link: string; children: React.ReactNode }> = ({
  link,
  children,
}) => {
  const [isHovered, setIsHovered] = useState(false); // State to track if the link is hovered

  // Define classes for the link based on hover state
  const linkClasses = `relative transition-all duration-200 ${
    isHovered
      ? "text-foregroundparchment"
      : "text-foregroundlightcyan opacity-30" // Change text color based on hover
  }`;

  // Determine the appropriate icon based on the link text
  const iconName = iconMap[children as string];

  return (
    <Link
      href={link} // Link destination
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
      onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
      className={linkClasses} // Apply computed classes
    >
      <span className="relative">
        {isHovered && <span className="absolute top-0 -left-10">&lt;</span>}
        {children}
        {isHovered && <span className="absolute top-0 -right-7">/&gt;</span>}
        {iconName && (
          <span className="material-symbols-outlined absolute top-1.5 left-[-25px]">
            {iconName}
          </span>
        )}
      </span>
    </Link>
  );
};

// NavBar component that contains the navigation links
const NavBar = () => {
  return (
    <>
      {/* Add the Material Symbols stylesheet once */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,600,0,0"
      />

      <nav className="font-sans max-w-4xl mx-auto rounded-[50px] backdrop-blur-[5px] px-4 py-2 font-semibold mt-4">
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
