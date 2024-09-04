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
        {isHovered && <span className="absolute -left-10 top-0">&lt;</span>}
        {children}
        {isHovered && <span className="absolute -right-7 top-0">/&gt;</span>}
        {iconName && (
          <span className="material-symbols-outlined absolute left-[-25px] top-1.5">
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
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,600,1,0"
      />
      <div className="z-50 mx-auto my-4 flex max-w-4xl items-center justify-between">
        {/* Logo Image */}
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

        <nav className="flex flex-1 items-center justify-center rounded-[50px] pb-3 pt-2 font-sans font-semibold backdrop-blur-[5px]">
          <div className="flex space-x-16 text-poppins1_5rem">
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
