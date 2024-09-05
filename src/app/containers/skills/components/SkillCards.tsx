import React from "react";
import Image from "next/image";

interface CardProps {
  src: string; // Source for the image
  borderColor: string; // Border color
}

const Card: React.FC<CardProps> = ({ src, borderColor }) => {
  return (
    <div
      className={`m-1 flex h-[110px] w-[95px] flex-col items-center justify-center rounded-lg border-4 transition-all duration-300`}
      style={{
        borderColor: borderColor,
      }}
    >
      <div
        className="transition-all duration-300"
        style={{
          filter: `drop-shadow(0 0 10px ${borderColor})`, // Apply the glow effect using drop-shadow
        }}
      >
        <Image
          src={src}
          width={50}
          height={50}
          alt="Image"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Card;
