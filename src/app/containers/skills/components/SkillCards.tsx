import React from "react";
import Image from "next/image";

interface CardProps {
  src: string; // Source for the image
  borderColor: string; // Border color
}

const Card: React.FC<CardProps> = ({ src, borderColor }) => {
  return (
    <div
      className={`m-1 flex h-[110px] w-[95px] flex-col items-center justify-center rounded-lg border-4`}
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
