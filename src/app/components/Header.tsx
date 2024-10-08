import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="mb-6 mt-[3rem] flex justify-start md:mt-[71px]">
      <h2 className="relative z-10 inline-block text-2xl font-bold md:text-[4vw]">
        {title}
        <span className="absolute left-1/2 top-[7vw] -z-10 h-[4px] w-full -translate-x-1/2 transform animate-pulse bg-[#00FFFF] opacity-100 shadow-[0_-5px_10px_#00FFFF] blur-[1px] md:top-[4vw] lg:top-[3vw]"></span>
      </h2>
    </header>
  );
};

export default Header;
