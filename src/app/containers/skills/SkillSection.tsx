import React from "react";
import Header from "@/app/components/Header";
import SkillCards from "./components/SkillCards";

const SkillSection = () => {
  return (
    <main className="mb-6 flex h-auto w-full flex-col items-center justify-center">
      <Header title={"My TechStack and Skills"} />
      <div className="m-3 flex flex-col items-center justify-center md:flex-row">
        <div
          id="WebDev"
          className="flex flex-col items-center justify-center rounded-3xl bg-forbentobg px-2 py-7"
        >
          <h1 className="p-2 text-[1rem] font-semibold md:text-poppins1_5rem">
            &lt;WebDevelopment /&gt;
          </h1>

          <div className="flex w-[220px] flex-row flex-wrap items-center justify-center md:w-[350px]">
            <SkillCards
              src={"/techLogos/Html5.svg"}
              borderColor={"#E34F26"}
              tooltipContent={"HTML"}
            />
            <SkillCards
              src={"/techLogos/css.svg"}
              borderColor={"#264DE4"}
              tooltipContent={"CSS"}
            />
            <SkillCards
              src={"/techLogos/Tailwind.svg"}
              borderColor={"#38BDF8"}
              tooltipContent={"Tailwind"}
            />
            <SkillCards
              src={"/techLogos/JavaScript.svg"}
              borderColor={"#F7DF1E"}
              tooltipContent={"JavaScript"}
            />
            <SkillCards
              src={"/techLogos/Typescript.svg"}
              borderColor={"#3178C6"}
              tooltipContent={"Typescript"}
            />
            <SkillCards
              src={"/techLogos/React.svg"}
              borderColor={"#61DAFB"}
              tooltipContent={"React"}
            />
            <SkillCards
              src={"/techLogos/Nextjs.svg"}
              borderColor={"#FFFFFF"}
              tooltipContent={"Nextjs"}
            />

            <SkillCards
              src={"/techLogos/Supabase.svg"}
              borderColor={"#3ECF8E"}
              tooltipContent={"Supabase"}
            />
            <SkillCards
              src={"/techLogos/Postgresql.svg"}
              borderColor={"#336791"}
              tooltipContent={"PostgreSQL"}
            />
          </div>
        </div>
        <div
          id="Design"
          className="m-6 flex flex-col items-center justify-center rounded-3xl bg-forbentobg px-2 py-7"
        >
          <h1 className="p-2 text-[1rem] font-semibold md:text-poppins1_5rem">
            &lt;Design /&gt;
          </h1>

          <div className="flex w-[220px] flex-row flex-wrap items-center justify-center md:w-[330px]">
            <SkillCards
              src={"/techLogos/Photoshop.svg"}
              borderColor={"#31A8FF"}
              tooltipContent={"Photoshop"}
            />
            <SkillCards
              src={"/techLogos/figma.svg"}
              borderColor={"#A259FF"}
              tooltipContent={"Figma"}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SkillSection;
