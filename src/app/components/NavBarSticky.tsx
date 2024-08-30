"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

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
        {isHovered && <span className="absolute top-0 -left-8">&lt;</span>}
        {children}
        {isHovered && <span className="absolute top-0 -right-5">/&gt;</span>}
        {iconName && (
          <span
            className="material-symbols-outlined absolute left-[-20px] top-[2.5px]"
            style={{ fontSize: "18px" }}
          >
            {iconName}
          </span>
        )}
      </span>
    </Link>
  );
};

const NavBarSticky = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0"
      />
      <div className="border-[#00FFFF] border-[1px] rounded-[50px] flex items-center justify-between max-w-2xl mx-auto my-4">
        <nav className="flex-1 flex items-center justify-center font-sans rounded-[50px] bg-[#00FFFF] bg-opacity-5 backdrop-blur-[5px] pt-3 pb-3 font-semibold">
          <div className="flex space-x-16 text-poppins1rem">
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

export default NavBarSticky;
