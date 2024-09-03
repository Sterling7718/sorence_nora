import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <main className="container mx-auto w-full z-10 max-h-full flex items-center justify-center">
      {/* The w-full and h-screen classes make the div cover the full screen */}
      <div className="flex items-center">
        <div className="flex flex-row">
          <div className=" relative">
            <Image
              src="/SNPic.png"
              alt="Sorence"
              width={480}
              height={480}
              className="z-20"
            />
            <div
              id="bgForPicture"
              className=" absolute top-[103px] left-[56px] -z-10 bg-forbentobg w-[354px] h-[320px] rounded-full"
            ></div>
          </div>

          <div className=" -ml-60">
            <h1 className=" text-heroheading7rem font-heroheading7rem">
              Sorence
            </h1>
            <h1 className="text-heroheading7rem font-heroheading7rem -mt-16">
              Nora
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
