import React from "react";
import SkillCards from "./components/SkillCards";
import Header from "@/app/components/Header";

const SkillSection = () => {
  return (
    <main className="mb-6 flex h-auto w-full flex-col items-center justify-center">
      <Header title={"My TechStack and Skills"} />
      <div className="flex flex-row items-center justify-center">
        <div
          id="WebDev"
          className="flex flex-col items-center justify-center rounded-3xl bg-forbentobg px-2 py-7"
        >
          <h1 className="p-2 text-poppins1_5rem font-semibold">
            &lt;WebDevelopment /&gt;
          </h1>

          <div className="flex w-[350px] flex-row flex-wrap items-center justify-center">
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
          className="m-6 flex flex-col items-center justify-center rounded-3xl bg-forbentobg px-2 py-7"
        >
          <h1 className="p-2 text-poppins1_5rem font-semibold">
            &lt;Design /&gt;
          </h1>

          <div className="flex w-[250px] flex-row flex-wrap items-center justify-center">
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
