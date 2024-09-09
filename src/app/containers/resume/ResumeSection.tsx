import Header from "@/app/components/Header";
import React from "react";
import CircuitBorder from "./components/CircuitBorder";

const ResumeSection = () => {
  return (
    <main className="mb-6 flex h-auto w-full flex-col flex-wrap items-center justify-center border">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,600,1,0"
      />

      {/* Header */}
      <Header title={"About me"} />

      {/* Personal Info */}
      <div className="mb-24 flex h-auto w-full flex-row items-center justify-center">
        <h1 className="z-10 mr-16 text-center text-[1.3rem] font-bold max-sm:hidden md:relative lg:text-subheadingpoppins2rem">
          &lt;Personal Info /&gt;
          <span className="absolute bottom-3.5 left-1/2 -z-10 h-[4px] w-full -translate-x-1/2 transform animate-pulse bg-[#003e3e] opacity-100 shadow-[0_-5px_10px_#00FFFF] blur-[2px]"></span>
        </h1>
        <div
          id="descriptions"
          className="flex flex-col items-center rounded-3xl bg-forbentobg p-7"
        >
          <h1 className="relative mb-2 mr-16 text-center text-[1rem] font-bold md:hidden">
            &lt;Personal Info /&gt;
            <span className="absolute bottom-1 left-1/2 h-[4px] w-full -translate-x-1/2 transform animate-pulse bg-[#003e3e] opacity-100 shadow-[0_-5px_10px_#21ffff] blur-[2px]"></span>
          </h1>
          <div className="flex w-[14rem] justify-center text-center md:w-[28rem]">
            <div className="grid w-[13rem] grid-cols-2 text-left text-[0.5rem] md:w-[26rem] md:gap-x-[1px] md:text-poppins1rem">
              <p>FirstName</p>
              <p>= Sorence</p>
              <p>LastName</p>
              <p>= Nora</p>
              <p>CountryOrigin</p>
              <p>= Philippines</p>
              <p>Email</p>
              <p>= nora.sorence@gmail.com</p>
              <p>Phone</p>
              <p>= +63 993 841 3918</p>
              <p>Languages</p>
              <p>= Filipino, English</p>
            </div>
          </div>
          <a
            href="https://drive.google.com/file/d/1_2AFU6mu0gYI23akwfE4JxWfK6lw1ITj/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 rounded-full bg-blue-500 px-4 py-2 text-foregroundparchment transition duration-300 hover:bg-blue-700 max-sm:scale-75"
          >
            View My Resume
          </a>
        </div>
      </div>
      <CircuitBorder flip={false} />

      {/* Education */}
      <div
        id="TitleAndDesc"
        className="my-24 flex h-auto w-full flex-row items-center justify-center"
      >
        <div
          id="TitleAndDesc"
          className="flex h-[20rem] w-[30rem] flex-col items-center justify-center rounded-3xl bg-forbentobg p-7 text-center"
        >
          <div id="2022-2024" className="mb-5 w-[410px] text-start">
            <div id="year" className="flex justify-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-900">
                <span className="material-symbols-outlined">school</span>
              </div>
              <h3 className="mb-1 ml-1 text-poppins1_5rem font-semibold">
                2022-2024
              </h3>
              <div className="relative">
                <div className="absolute right-[8.7rem] top-[2.6rem] h-20 w-0.5 bg-foregroundparchment"></div>
              </div>
            </div>
            <div id="desc" className="ml-20">
              <h4 className="text-poppins1rem font-medium">
                ASSOCIATES IN COMPUTER TECHNOLOGY <br />- STI SAN JOSE DEL MONTE
              </h4>
              <p className="ml-5 text-poppins1rem">2 years college program</p>
            </div>
          </div>

          <div id="2022-2024" className="mb-4 w-[410px] text-start">
            <div id="year" className="flex justify-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-900">
                <span className="material-symbols-outlined">school</span>
              </div>
              <h3 className="mb-1 ml-1 text-poppins1_5rem font-semibold">
                2020-2022
              </h3>
              <div className="relative">
                <div className="absolute right-[8.7rem] top-[2.6rem] h-20 w-0.5 bg-foregroundparchment"></div>
              </div>
            </div>
            <div id="desc" className="ml-20">
              <h4 className="text-poppins1rem font-medium">
                IT IN MOBILE APP AND WEB DEVELOPMENT
                <br />- STI FAIRVIEW
              </h4>
              <p className="ml-5 text-poppins1rem">
                Senior high school program (Grade 11 - 12)
              </p>
            </div>
          </div>
        </div>
        <h1 className="relative z-10 ml-16 text-center text-[1.3rem] font-bold lg:text-subheadingpoppins2rem">
          &lt;Education /&gt;
          <span className="absolute bottom-3.5 left-1/2 -z-10 h-[4px] w-full -translate-x-1/2 transform animate-pulse bg-[#003e3e] opacity-100 shadow-[0_-5px_10px_#00FFFF] blur-[2px]"></span>
        </h1>
      </div>
      <CircuitBorder flip={true} />

      {/* Certificates */}
      <div className="my-24 flex h-auto w-full flex-row items-center justify-center">
        <h1 className="relative z-10 mr-16 text-center text-[1.3rem] font-bold lg:text-subheadingpoppins2rem">
          &lt;Certificates /&gt;
          <span className="absolute bottom-3.5 left-1/2 -z-10 h-[4px] w-full -translate-x-1/2 transform animate-pulse bg-[#003e3e] opacity-100 shadow-[0_-5px_10px_#00FFFF] blur-[2px]"></span>
        </h1>
        <div
          id="Desc"
          className="flex h-[20rem] w-[30rem] flex-col items-center justify-center rounded-3xl bg-forbentobg p-7 text-center"
        >
          <div id="2022-2024" className="mb-5 w-[410px] text-start">
            <div id="year" className="flex justify-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-900">
                <span className="material-symbols-outlined">
                  workspace_premium
                </span>
              </div>
              <h3 className="mb-1 ml-1 text-poppins1_5rem font-semibold">
                2023
              </h3>
              <div className="relative">
                <div className="absolute right-[4.7rem] top-[2.6rem] h-44 w-0.5 bg-foregroundparchment"></div>
              </div>
            </div>
            <div id="desc" className="mb-6 ml-20">
              <h4 className="text-poppins1rem font-medium">
                JAVA FUNDAMENTALS ORACLE ACADEMY <br />- ORACLE ACADEMY
              </h4>
              <p className="ml-5 text-poppins1rem">
                Award of Course Completion
              </p>
            </div>
            <div id="desc" className="ml-20">
              <h4 className="text-poppins1rem font-medium">
                SYSTEMS ADMINISTRATION
                <br />- STI COLLEGE
              </h4>
              <p className="ml-5 text-poppins1rem">
                Award of Course Completion
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResumeSection;
