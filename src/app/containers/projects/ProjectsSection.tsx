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
          className="w-[50rem] rounded-3xl bg-forbentobg p-6"
        >
          <h1 className="pb-2 pt-4 text-center text-subheadingpoppins2rem font-semibold">
            &lt;Student Clearance Monitor /&gt;
          </h1>
          <div className="flex flex-row items-center justify-center">
            <div id="samplePicsSlider">
              <PicsSlider />
            </div>
            <div id="descriptions" className="mr-6">
              <div className="items-center justify-center">
                <h2 className="text-poppins1_5rem">Description:</h2>
                <p className="text-poppins1rem">
                  {" "}
                  This system manages to monitor students&apos; clearance and
                  reflect it to other departments.
                  <br />
                  This is part of my OJT project in STI College SJDM.
                </p>
              </div>
              <div className="my-6">
                <h2 className="text-poppins1_5rem">Technologies:</h2>
                <div
                  id="Technologies"
                  className="flex flex-col flex-wrap items-center justify-center rounded-3xl bg-forbentobg px-4"
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
