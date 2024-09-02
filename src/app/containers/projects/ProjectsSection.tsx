import Header from "@/app/components/Header";
import React from "react";
import PicsSlider from "./components/PicsSlider";
import TechCards from "./components/TechCards";

const ProjectsSection = () => {
  return (
    <main className="w-full h-auto flex flex-col items-center mb-6">
      <Header title={"My project"} />
      <div className="flex flex-row justify-center">
        <div
          id="StudentClearanceMonitor"
          className="bg-forbentobg p-6 rounded-3xl w-[50rem]"
        >
          <h1 className="text-subheadingpoppins2rem  pt-4 pb-2 text-center">
            &lt;Student Clearance Monitor /&gt;
          </h1>
          <div className=" flex flex-row justify-center items-center">
            <div id="samplePicsSlider">
              <PicsSlider />
            </div>
            <div id="descriptions" className="mr-6">
              <div className="  justify-center items-center">
                <h2 className="text-poppins1_5rem">Description:</h2>
                <p className="text-poppins1rem">
                  This is part of my OJT project in STI College.
                  <br />
                  This system manages to monitor students&apos; clearance and
                  reflect it to other departments.
                </p>
              </div>
              <div className=" my-6">
                <h2 className="text-poppins1_5rem">Technologies:</h2>
                <div
                  id="Technologies"
                  className="bg-forbentobg flex flex-col flex-wrap justify-center items-center px-4 rounded-3xl"
                >
                  <div className="flex flex-wrap justify-center">
                    <TechCards
                      src="/techLogos/Html5.svg"
                      borderColor="#E34F26"
                    />
                    <TechCards src="/techLogos/css.svg" borderColor="#264DE4" />
                    <TechCards
                      src="/techLogos/Tailwind.svg"
                      borderColor="#38BDF8"
                    />
                    <TechCards
                      src="/techLogos/JavaScript.svg"
                      borderColor="#F7DF1E"
                    />
                    <TechCards
                      src="/techLogos/Typescript.svg"
                      borderColor="#3178C6"
                    />
                    <TechCards
                      src="/techLogos/Nextjs.svg"
                      borderColor="#FFFFFF"
                    />
                    <TechCards
                      src="/techLogos/Supabase.svg"
                      borderColor="#3ECF8E"
                    />
                    <TechCards
                      src="/techLogos/Postgresql.svg"
                      borderColor="#336791"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectsSection;
