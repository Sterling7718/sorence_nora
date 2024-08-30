import React from "react";
import SkillCards from "./components/SkillCards";
import Header from "@/app/components/Header";

const SkillSection = () => {
  return (
    <main className="w-full h-auto flex items-center justify-center flex-col mb-6">
      <Header title={"My TechStack and Skills"} />
      <div className="flex flex-row items-center justify-center">
        <div
          id="WebDev"
          className="bg-forbentobg flex flex-col justify-center items-center py-7 px-2 rounded-3xl"
        >
          <h1 className="text-poppins1_5rem p-2">&lt;WebDevelopment /&gt;</h1>

          <div className=" flex flex-row justify-center w-[350px] items-center flex-wrap">
            <SkillCards src={"/techLogos/Html5.svg"} borderColor={"#E34F26"} />
            <SkillCards src={"/techLogos/css.svg"} borderColor={"#264DE4"} />
            <SkillCards
              src={"/techLogos/Tailwind.svg"}
              borderColor={"#38BDF8"}
            />
            <SkillCards
              src={"/techLogos/JavaScript.svg"}
              borderColor={"#F7DF1E"}
            />
            <SkillCards
              src={"/techLogos/Typescript.svg"}
              borderColor={"#3178C6"}
            />
            <SkillCards src={"/techLogos/React.svg"} borderColor={"#61DAFB"} />
            <SkillCards src={"/techLogos/Nextjs.svg"} borderColor={"#FFFFFF"} />

            <SkillCards
              src={"/techLogos/Supabase.svg"}
              borderColor={"#3ECF8E"}
            />
            <SkillCards
              src={"/techLogos/Postgresql.svg"}
              borderColor={"#336791"}
            />
          </div>
        </div>
        <div
          id="Design"
          className="bg-forbentobg flex flex-col justify-center items-center py-7 px-2 rounded-3xl m-6"
        >
          <h1 className="text-poppins1_5rem p-2">&lt;Design /&gt;</h1>

          <div className=" flex flex-row justify-center w-[250px] items-center flex-wrap">
            <SkillCards
              src={"/techLogos/Photoshop.svg"}
              borderColor={"#31A8FF"}
            />
            <SkillCards src={"/techLogos/figma.svg"} borderColor={"#A259FF"} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SkillSection;
