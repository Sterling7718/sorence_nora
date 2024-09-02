import React from "react";
import Image from "next/image";

interface CardProps {
  src: string;
  borderColor: string;
}

const Card: React.FC<CardProps> = ({ src, borderColor }) => {
  return (
    <div
      className="w-[50px] h-[65px] m-1 rounded-lg border-2 flex justify-center items-center"
      style={{ borderColor }}
    >
      <Image
        src={src}
        width={25}
        height={25}
        alt="Tech Logo"
        className="rounded-lg"
      />
    </div>
  );
};

export default Card;
