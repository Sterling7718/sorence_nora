import React, { useState } from "react";
import Image from "next/image";

type ImageSliderProps = {
  image1: string;
  image2: string;
  altText1: string;
  altText2: string;
};

const ImageSlider: React.FC<ImageSliderProps> = ({
  image1,
  image2,
  altText1,
  altText2,
}) => {
  const [sliderValue, setSliderValue] = useState(50); // Initial slider value set to 50%

  return (
    <div className="relative w-full h-full">
      {/* First Image with reversed clip effect */}
      <Image
        src={image1}
        alt={altText1}
        layout=""
        width={800}
        height={800}
        className="absolute"
        style={{
          clipPath: `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)`, // Clip based on slider value
        }}
      />
      {/* Second Image without opacity effect */}
      <Image
        src={image2}
        alt={altText2}
        layout=""
        width={800}
        height={800}
        className="absolute"
        style={{
          clipPath: `polygon(${sliderValue}% 0, 100% 0, 100% 100%, ${sliderValue}% 100%)`, // Clip based on reversed slider value
        }}
      />
      {/* Slider Input */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={(e) => setSliderValue(Number(e.target.value))} // Update slider value on change
        className="absolute bottom-[-20px] left-0 w-full"
      />
    </div>
  );
};

export default ImageSlider;
