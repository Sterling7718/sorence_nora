import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay } from "swiper/modules"; // Import Autoplay module

const images = [
  "/forProject_Section/scs.png",
  "/forProject_Section/AdminPage.png",
  "/forProject_Section/CashierPage.png",
  "/forProject_Section/ProgHeadPage.png",
  "/forProject_Section/RegistrarPage.png",
];

const PicsSlider = () => {
  return (
    <div className="w-[30rem] pl-12 -mr-12">
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards, Autoplay]} // Include Autoplay module
        width={300}
        height={300}
        autoplay={{
          delay: 1000, // 1 seconds delay
          disableOnInteraction: false, // Continue autoplay after interactions
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              width={300}
              height={300}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PicsSlider;
