import Header from "@/app/components/Header";
import React from "react";
import PicsSlider from "./components/PicsSlider";
import TechCards from "./components/TechCards";

const ProjectsSection = () => {
  return (
    <main className="w-full h-auto flex flex-col items-center justify-start">
      <Header title={"My project"} />
      <div className="flex flex-row items-center justify-center mt-4">
        {/* Added margin-top for better spacing */}
        <div
          id="StudentClearanceMonitor"
          className="bg-forbentobg flex flex-col py-6 px-6 rounded-3xl w-[50rem] justify-center"
        >
          {/* Increased padding for better spacing */}
          <h1 className="border text-subheadingpoppins2rem ml-5 p-4 text-left">
            &lt;Student Clearance Monitor /&gt;
          </h1>
          <div className=" border flex flex-row justify-center items-center mt-4">
            {/* Added margin-top for spacing between header and content */}
            <div id="samplePicsSlider" className="border mr-2">
              {/* Reduced margin-right for better balance */}
              <PicsSlider />
            </div>
            <div id="descriptions" className=" border ml-2">
              {/* Added margin-left for spacing between slider and descriptions */}
              <div id="descriptions" className=" border ml-4 mr-6">
                {/* Added margin-left for spacing between slider and descriptions */}
                <div>
                  <h2 className="text-poppins1_5rem">Description:</h2>
                  <p className="text-poppins1rem">
                    This is part of my OJT project in STI.
                    <br />
                    This system manages to monitor students&apos; clearance and
                    reflect it to other departments.
                  </p>
                </div>
              </div>

              <div className="mt-4">
                {/* Added margin-top for spacing between description and technologies */}
                <h2 className="text-poppins1_5rem">Technologies:</h2>
                <div
                  id="WebDev"
                  className="bg-forbentobg flex flex-col justify-center items-center py-7 px-2 rounded-3xl"
                >
                  <div className=" flex flex-row justify-center w-auto items-center flex-wrap">
                    <TechCards
                      src={"/techLogos/Html5.svg"}
                      borderColor={"#E34F26"}
                    />
                    <TechCards
                      src={"/techLogos/css.svg"}
                      borderColor={"#264DE4"}
                    />
                    <TechCards
                      src={"/techLogos/Tailwind.svg"}
                      borderColor={"#38BDF8"}
                    />
                    <TechCards
                      src={"/techLogos/JavaScript.svg"}
                      borderColor={"#F7DF1E"}
                    />
                    <TechCards
                      src={"/techLogos/Typescript.svg"}
                      borderColor={"#3178C6"}
                    />
                    <TechCards
                      src={"/techLogos/React.svg"}
                      borderColor={"#61DAFB"}
                    />
                    <TechCards
                      src={"/techLogos/Nextjs.svg"}
                      borderColor={"#FFFFFF"}
                    />

                    <TechCards
                      src={"/techLogos/Supabase.svg"}
                      borderColor={"#3ECF8E"}
                    />
                    <TechCards
                      src={"/techLogos/Postgresql.svg"}
                      borderColor={"#336791"}
                    />
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectsSection;
