import React from "react";

interface CircuitBorderProps {
  flip: boolean; // Adding a boolean prop named 'flip'
}

const CircuitBorder: React.FC<CircuitBorderProps> = ({ flip }) => {
  return (
    <div
      className={` ${flip ? "relative scale-x-[-1] -left-0.5" : ""}`} // Conditionally adding 'scale-x-[-1]' class based on the 'flip' prop
    >
      <div
        id="main"
        className="z-10 relative h-[24px] w-[650px] flex items-center justify-center"
      >
        {/* Horizontal line with circles */}
        <div className="absolute -top-[170px] left-[54px] w-9 h-9 bg-foregroundlightcyan rounded-full flex items-center justify-center">
          <div className="w-5 h-5 bg-bg rounded-full"></div>
          <div className="absolute top-[29px] left-[10px] w-4 h-[160px] bg-foregroundlightcyan"></div>
        </div>

        <div className="w-[520px] h-4 bg-foregroundlightcyan flex items-center justify-center"></div>

        <div className="absolute top-[165px] right-[55px] w-9 h-9 bg-foregroundlightcyan rounded-full flex items-center justify-center">
          <div className="w-5 h-5 bg-bg rounded-full"></div>
          <div className="absolute -top-[152px] left-[10px] w-4 h-[159px] bg-foregroundlightcyan"></div>
        </div>
      </div>
    </div>
  );
};

export default CircuitBorder;
