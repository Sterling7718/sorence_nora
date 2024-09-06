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

  const leftArrow = isHovered && (
    <span className="absolute -left-3 top-0 hidden md:block">&lt;</span>
  );

  const rightArrow = isHovered && (
    <span className="absolute -right-6 top-0 hidden md:block">/&gt;</span>
  );

  const iconName = iconMap[children as string];

  return (
    <Link
      href={link}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={linkClasses}
    >
      <span className="relative flex flex-row items-center">
        {leftArrow}
        <span className="material-symbols-outlined block max-sm:h-6 max-sm:w-6">
          {iconName}
        </span>{" "}
        {/* Always show icon */}
        <span className={`hidden md:inline`}>{children}</span>{" "}
        {/* Hide text on smaller screens */}
        {rightArrow}
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,600,1,0"
      />
      <div className="mx-auto my-4 flex max-w-4xl items-center justify-between">
        {/* Logo Image */}
        <div className="hidden md:block md:px-4 lg:p-0">
          <div className="relative flex items-center">
            {/* Box behind the image with background blur */}
            <div className="absolute h-20 w-20 rounded-lg bg-bg backdrop-blur-[30px]"></div>

            {/* Image */}
            <Image
              src="/logo.svg"
              alt="Logo"
              width={50}
              height={50}
              className="relative mr-6 h-20 w-20"
            />
          </div>
        </div>

        <nav className="fixed bottom-0 left-0 z-50 flex w-full flex-1 items-center justify-center rounded-[50px] pb-3 pt-2 font-sans font-semibold backdrop-blur-[5px] md:static md:w-auto md:px-5 md:py-3">
          <div className="flex space-x-4 text-sm md:space-x-8 md:text-xl lg:space-x-16">
            {["Home", "Skills", "Projects", "Resume", "Contact"].map(
              (section, index) => (
                <CustomNavLink key={index} link={`#${section.toLowerCase()}`}>
                  {section}
                </CustomNavLink>
              ),
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
