import React from "react";
import Image from "next/image";
import { Tooltip } from "@nextui-org/tooltip";

interface CardProps {
  src: string; // Source for the image
  borderColor: string; // Border color
  tooltipContent: string;
}

const Card: React.FC<CardProps> = ({ src, borderColor, tooltipContent }) => {
  return (
    <div
      style={
        {
          "--border-color": borderColor, // Using the dynamic border color
          "--drop-shadow": `drop-shadow(0 0 10px ${borderColor})`, // Dynamic drop-shadow color based on the borderColor
          borderColor: `var(--border-color)`, // Applying the custom CSS variable to the border color
        } as React.CSSProperties // Casting to React.CSSProperties to allow custom CSS variables
      }
      className={`m-1 flex h-[110px] w-[95px] flex-col items-center justify-center rounded-lg border-4 transition-all duration-300 hover:-skew-x-6 hover:skew-y-3 hover:[filter:var(--drop-shadow)]`}
    >
      <div
      // Tailwind CSS classes for layout, size, border, and hover effect
      >
        <div className="transition-all duration-300 hover:[filter:var(--drop-shadow)]">
          <Tooltip
            content={tooltipContent}
            className="max-w-fit rounded-md bg-bg px-3 py-2 opacity-90"
          >
            <Image
              src={src}
              width={50}
              height={50}
              alt="Image"
              className="rounded-lg transition-all duration-300 hover:-skew-x-6 hover:skew-y-3 hover:animate-pulse"
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Card;
