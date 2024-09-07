import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="mb-6 mt-[71px] flex justify-start">
      <h2 className="relative z-10 inline-block text-3xl font-bold md:text-subheadingpoppins3rem">
        {title}
        <span className="absolute left-1/2 top-8 -z-10 h-[4px] w-full -translate-x-1/2 transform animate-pulse bg-[#00FFFF] opacity-100 shadow-[0_-5px_10px_#00FFFF] blur-[1px] md:top-9"></span>
      </h2>
    </header>
  );
};

export default Header;
