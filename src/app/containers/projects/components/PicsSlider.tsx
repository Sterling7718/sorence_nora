import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules"; // Import Swiper effect

const images = [
  "/forProject_Section/AdminPage.png",
  "/forProject_Section/CashierPage.png",
  "/forProject_Section/ProgHeadPage.png",
  "/forProject_Section/RegistrarPage.png",
  "/forProject_Section/scs.png",
];

const PicsSlider = () => {
  return (
    <div className=" w-96 pl-11">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className=""
        width={250}
        height={250}
      >
        <SwiperSlide>
          <Image
            src="/forProject_Section/scs.png"
            alt=""
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/forProject_Section/AdminPage.png"
            alt=""
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/forProject_Section/CashierPage.png"
            alt=""
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/forProject_Section/ProgHeadPage.png"
            alt=""
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/forProject_Section/RegistrarPage.png"
            alt=""
            width={300}
            height={300}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PicsSlider;
