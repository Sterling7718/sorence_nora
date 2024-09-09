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
    <div className="-mr-12 h-[6rem] w-[10rem] pl-12 md:w-[30rem]">
      <div className="-ml-6 -mt-28 hidden md:block">
        <Swiper
          effect="cards"
          grabCursor={true}
          modules={[EffectCards, Autoplay]} // Include Autoplay module
          width={350}
          height={350}
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
                width={350}
                height={350}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="-ml-16 block md:hidden">
        <Swiper
          effect="cards"
          grabCursor={true}
          modules={[EffectCards, Autoplay]} // Include Autoplay module
          width={150}
          height={150}
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
                width={150}
                height={150}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PicsSlider;
