import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className=" flex justify-start mt-[71px] mb-2 ">
      <h2 className="text-subheadingpoppins3rem font-bold relative z-10 inline-block">
        {title}
        <span className="absolute bottom-2 -z-10 left-1/2 w-full h-[4px] transform -translate-x-1/2 bg-[#00FFFF] opacity-100 blur-[1px] shadow-[0_-5px_10px_#00FFFF]"></span>
      </h2>
    </header>
  );
};

export default Header;
