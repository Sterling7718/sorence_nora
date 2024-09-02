import React from "react";
import Image from "next/image";

interface CardProps {
  src: string; // Source for the image
  borderColor: string; // Border color
}

const Card: React.FC<CardProps> = ({ src, borderColor }) => {
  return (
    <div
      className={`w-[50px] h-[65px] m-1 rounded-lg border-4 flex flex-col justify-center items-center`}
      style={{ borderColor: borderColor }}
    >
      <Image
        src={src}
        width={30}
        height={30}
        alt="Image"
        className="rounded-lg"
      />
    </div>
  );
};

export default Card;
