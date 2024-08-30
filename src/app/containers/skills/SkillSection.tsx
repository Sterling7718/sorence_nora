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
            <SkillCards src={"/"} borderColor={"#00FFFF"} />
            <SkillCards src={"/"} borderColor={"#00FFFF"} />
            <SkillCards src={"/"} borderColor={"#00FFFF"} />
            <SkillCards src={"/"} borderColor={"#00FFFF"} />
            <SkillCards src={"/"} borderColor={"#00FFFF"} />
            <SkillCards src={"/"} borderColor={"#00FFFF"} />
            <SkillCards src={"/"} borderColor={"#00FFFF"} />
            <SkillCards src={"/"} borderColor={"#00FFFF"} />
          </div>
        </div>
        <div
          id="Design"
          className="bg-forbentobg flex flex-col justify-center items-center py-7 px-2 rounded-3xl m-6"
        >
          <h1 className="text-poppins1_5rem p-2">&lt;Design /&gt;</h1>

          <div className=" flex flex-row justify-center w-[350px] items-center flex-wrap">
            <SkillCards src={"/"} borderColor={"#00FFFF"} />
            <SkillCards src={"/"} borderColor={"#00FFFF"} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SkillSection;
