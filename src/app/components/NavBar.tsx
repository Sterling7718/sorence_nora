"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const iconMap: { [key: string]: string } = {
  Home: "home",
  Skills: "stacks",
  Projects: "deployed_code",
  Resume: "account_box",
  Contact: "mail",
};

const CustomNavLink: React.FC<{ link: string; children: React.ReactNode }> = ({
  link,
  children,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const linkClasses = `transition-all duration-200 ${
    isHovered
      ? "text-foregroundparchment"
      : "text-foregroundlightcyan opacity-30"
  }`;

  const iconName = iconMap[children as string];

  return (
    <Link
      href={link}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={linkClasses}
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

const NavBar = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,600,0,0"
      />
      <div className="flex items-center justify-between max-w-4xl mx-auto mt-4">
        {/* Logo Image */}
        <Image
          src="/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="h-20 w-20 mr-6" // Adjusted height and width for better alignment
        />

        <nav className="flex-1 flex items-center justify-center font-sans rounded-[50px] backdrop-blur-[5px] pt-2 pb-3 font-semibold">
          <div className="flex space-x-16 text-poppins1_5rem">
            {["Home", "Skills", "Projects", "Resume", "Contact"].map(
              (section, index) => (
                <CustomNavLink key={index} link={`#${section.toLowerCase()}`}>
                  {section}
                </CustomNavLink>
              )
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
