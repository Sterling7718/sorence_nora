import Header from "@/app/components/Header";
import React from "react";

const ResumeSection = () => {
  return (
    <main className="w-full h-auto flex flex-col items-center justify-center mb-6">
      {/* Centered the entire main content */}
      <Header title={"About me"} />

      <div
        id="WebDev"
        className="bg-forbentobg flex flex-col justify-center items-center py-7 px-2 rounded-3xl w-full max-w-xl"
        // Centered the WebDev section and limited its width for better alignment
      >
        <h1 className="text-poppins1_5rem p-2 text-center">
          &lt;WebDevelopment /&gt;
        </h1>
        {/* Centered the heading text */}
        <div className="flex flex-row justify-center items-center flex-wrap w-full">
          {/* Centered the content inside the div */}
        </div>
      </div>
    </main>
  );
};

export default ResumeSection;
