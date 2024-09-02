import React from "react";

const CircuitBorder: React.FC = () => {
  return (
    <div className="z-10 border relative h-[24px] w-[650px] flex items-center justify-center">
      {/* Horizontal line with circles */}
      <div className="absolute -top-[170px] left-[10px] w-9 h-9 bg-foregroundlightcyan rounded-full flex items-center justify-center">
        <div className="w-5 h-5 bg-bg rounded-full"></div>{" "}
      </div>
      <div className="absolute -top-[140px] left-[20px] w-4 h-[159px] bg-foregroundlightcyan"></div>

      <div className="w-[600px] h-4 bg-foregroundlightcyan flex items-center justify-center"></div>

      <div className="absolute top-[170px] right-[10px] w-9 h-9 bg-foregroundlightcyan rounded-full flex items-center justify-center">
        <div className="w-5 h-5 bg-bg rounded-full"></div>{" "}
      </div>
      <div className="absolute top-[3px] right-[20px] w-4 h-[159px] bg-foregroundlightcyan"></div>
    </div>
  );
};

export default CircuitBorder;
