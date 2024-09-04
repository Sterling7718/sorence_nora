import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="mb-2 mt-[71px] flex justify-start">
      <h2 className="relative z-10 inline-block text-subheadingpoppins3rem font-bold">
        {title}
        <span className="absolute bottom-2 left-1/2 -z-10 h-[4px] w-full -translate-x-1/2 transform bg-[#00FFFF] opacity-100 shadow-[0_-5px_10px_#00FFFF] blur-[1px]"></span>
      </h2>
    </header>
  );
};

export default Header;
