import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const HeroSection = () => {
  const [sliderValue, setSliderValue] = useState(50); // Initial slider value set to 50%
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (lineRef.current) {
        const rect = lineRef.current.parentElement!.getBoundingClientRect();
        let newLeft = e.clientX - rect.left; // Calculate new left position
        let newSliderValue = (newLeft / rect.width) * 100; // Convert to percentage
        newSliderValue = Math.max(0, Math.min(newSliderValue, 100)); // Clamp value between 0 and 100
        setSliderValue(newSliderValue); // Update slider value
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove); // Remove move listener on mouse up
      document.removeEventListener("mouseup", handleMouseUp); // Remove up listener on mouse up
    };

    if (lineRef.current) {
      lineRef.current.addEventListener("mousedown", () => {
        document.addEventListener("mousemove", handleMouseMove); // Add move listener
        document.addEventListener("mouseup", handleMouseUp); // Add up listener
      });
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove); // Cleanup listeners
      document.removeEventListener("mouseup", handleMouseUp); // Cleanup listeners
    };
  }, []);

  return (
    <main className="container z-10 mx-auto flex max-h-full w-full items-center justify-center">
      <div className="flex items-center">
        <div className="flex flex-row">
          <div className="relative">
            <div className="items-center justify-center">
              <div className="relative h-[480px] w-[480px]">
                <div
                  id="TransLine"
                  ref={lineRef} // Reference for TransLine div
                  className="absolute top-5 z-20 h-[26rem] w-1 cursor-pointer bg-foregroundlightcyan"
                  style={{ left: `${sliderValue * 4.8}px` }} // Adjust the left position based on the slider value
                ></div>
                <Image
                  id="SNPicCartoonize"
                  src="/SNPicCartoonize.png"
                  alt="Sorence"
                  width={480}
                  height={480}
                  draggable="false" // Prevent image dragging
                  className="absolute"
                  style={{
                    userSelect: "none",
                    clipPath: `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)`, // Clip based on slider value
                  }}
                />
                <Image
                  id="SNPic"
                  src="/SNPic.png"
                  alt="Sorence"
                  width={480}
                  height={480}
                  draggable="false" // Prevent image dragging
                  className="absolute"
                  style={{
                    userSelect: "none",
                    clipPath: `polygon(${sliderValue}% 0, 100% 0, 100% 100%, ${sliderValue}% 100%)`, // Clip based on reversed slider value
                  }}
                />
              </div>
            </div>
            <div
              id="bgForPicture"
              className="absolute left-[56px] top-[103px] -z-10 h-[320px] w-[354px] rounded-full bg-forbentobg"
            ></div>
          </div>

          <div className="-ml-60">
            <h1 className="text-heroheading7rem font-heroheading7rem">
              Sorence
            </h1>
            <h1 className="-mt-16 text-heroheading7rem font-heroheading7rem">
              Nora
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
