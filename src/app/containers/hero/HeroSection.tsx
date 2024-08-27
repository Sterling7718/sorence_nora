import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <main className="w-full z-10 h-screen flex items-center justify-center">
      {/* The w-full and h-screen classes make the div cover the full screen */}
      <div className="flex items-center">
        <div className="flex flex-row">
          <Image
            src="/ForPortfolio.png"
            alt="Sorence"
            width={490}
            height={480}
            className=""
          />
          <div className=" -ml-60">
            <h1 className=" text-heroheading7rem font-heroheading7rem">
              Sorence
            </h1>
            <h1 className="text-heroheading7rem font-heroheading7rem -mt-16">
              Nora
            </h1>
          </div>
        </div>
        <Image
          src="/ForPortfolio1.png"
          alt="Sorence"
          width={490}
          height={480}
          className="absolute"
        />
      </div>
    </main>
  );
};

export default HeroSection;
