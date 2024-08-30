import React from "react";
import Image from "next/image";

interface CardProps {
  src: string; // Source for the image
  borderColor: string; // Border color
}

const Card: React.FC<CardProps> = ({ src, borderColor }) => {
  return (
    <div
      className={`w-[95px] h-[110px] m-1 rounded-lg border-4 flex flex-col justify-center items-center`}
      style={{ borderColor: borderColor }}
    >
      <Image
        src={src}
        width={50}
        height={50}
        alt="Image"
        className="rounded-lg"
      />
    </div>
  );
};

export default Card;
