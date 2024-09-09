import Header from "@/app/components/Header";
import React from "react";
import PicsSlider from "./components/PicsSlider";
import TechCards from "./components/TechCards";

const ProjectsSection = () => {
  return (
    <main className="mb-6 flex h-auto w-full flex-col items-center">
      <Header title={"My project"} />
      <div className="flex flex-row justify-center">
        <div
          id="StudentClearanceMonitor"
          className="w-[18rem] rounded-3xl bg-forbentobg p-6 md:w-[50rem]"
        >
          <h1 className="mb-2 pb-2 pt-4 text-center text-[1rem] font-semibold md:text-subheadingpoppins2rem">
            &lt;Student Clearance Monitor /&gt;
          </h1>
          <div className="flex flex-col items-center justify-center md:flex-row">
            <div id="samplePicsSlider">
              <PicsSlider />
            </div>
            <div id="descriptions" className="mt-2 md:mr-6">
              <div className="items-center justify-center">
                <p className="text-[0.8rem] md:text-poppins1rem">
                  This system manages to monitor students&apos; clearance and
                  reflect it to other departments.
                  <br />
                  This is part of my OJT project in STI College SJDM.
                </p>
              </div>
              <div className="my-6">
                <h2 className="text-[1rem] md:text-poppins1_5rem">
                  Technologies:
                </h2>
                <div
                  id="Technologies"
                  className="flex flex-col flex-wrap items-center justify-center rounded-3xl bg-forbentobg px-4"
                >
                  <div className="flex flex-wrap justify-center">
                    <TechCards
                      src="/techLogos/Html5.svg"
                      borderColor="#E34F26"
                      tooltipContent={"HTML"}
                    />
                    <TechCards
                      src="/techLogos/css.svg"
                      borderColor="#264DE4"
                      tooltipContent={"CSS"}
                    />
                    <TechCards
                      src="/techLogos/Tailwind.svg"
                      borderColor="#38BDF8"
                      tooltipContent={"Tailwind"}
                    />
                    <TechCards
                      src="/techLogos/JavaScript.svg"
                      borderColor="#F7DF1E"
                      tooltipContent={"JavaScript"}
                    />
                    <TechCards
                      src="/techLogos/Typescript.svg"
                      borderColor="#3178C6"
                      tooltipContent={"Typescript"}
                    />
                    <TechCards
                      src="/techLogos/Nextjs.svg"
                      borderColor="#FFFFFF"
                      tooltipContent={"Nextjs"}
                    />
                    <TechCards
                      src="/techLogos/Supabase.svg"
                      borderColor="#3ECF8E"
                      tooltipContent={"Supabase"}
                    />
                    <TechCards
                      src="/techLogos/Postgresql.svg"
                      borderColor="#336791"
                      tooltipContent={"PostgreSQL"}
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
