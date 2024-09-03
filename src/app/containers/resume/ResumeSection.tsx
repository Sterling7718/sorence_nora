import Header from "@/app/components/Header";
import React from "react";
import CircuitBorder from "./CircuitBorder";

const ResumeSection = () => {
  return (
    <main className="w-full h-auto flex flex-col items-center justify-center mb-6">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,600,1,0"
      />

      {/* Centered the entire main content */}
      <Header title={"About me"} />
      <div className="w-full h-auto flex flex-row items-center justify-center mb-24">
        {/* Adjusted to flex-col for vertical alignment */}
        <h1 className="text-subheadingpoppins2rem font-semibold mr-16 text-center">
          &lt;Personal Info /&gt;
        </h1>
        <div
          id="descriptions"
          className="bg-forbentobg p-7 rounded-3xl  w-fit flex flex-col items-center"
        >
          <div className="w-[28rem] flex justify-center text-center">
            <div className="w-[26rem] text-poppins1rem text-left grid grid-cols-2 gap-x-[1px]">
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
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
          >
            View My Resume
          </a>
        </div>
      </div>
      <CircuitBorder flip={false} />
      <div
        id="TitleAndDesc"
        className="w-full h-auto flex flex-row items-center justify-center my-24"
      >
        <div
          id="TitleAndDesc"
          className="bg-forbentobg p-7 rounded-3xl w-[30rem] h-[20rem] flex flex-col items-center text-center justify-center"
        >
          <div id="2022-2024" className="text-start mb-5 w-[410px]">
            <div id="year" className="flex justify-start">
              <div className="bg-green-900 flex justify-center items-center w-10 h-10 rounded-full">
                <span className="material-symbols-outlined">school</span>
              </div>
              <h3 className="text-poppins1_5rem font-semibold mb-1 ml-1">
                2022-2024
              </h3>
              <div className="relative">
                <div className="absolute top-[2.6rem] right-[8.7rem] bg-white w-0.5 h-20"></div>
              </div>
            </div>
            <div id="desc" className="ml-20">
              <h4 className="text-poppins1rem font-medium ">
                ASSOCIATES IN COMPUTER TECHNOLOGY <br />- STI SAN JOSE DEL MONTE
              </h4>
              <p className="text-poppins1rem ml-5  ">2 years college program</p>
            </div>
          </div>

          <div id="2022-2024" className="text-start mb-4 w-[410px]">
            <div id="year" className="flex justify-start">
              <div className="bg-green-900 flex justify-center items-center w-10 h-10 rounded-full">
                <span className="material-symbols-outlined">school</span>
              </div>
              <h3 className="text-poppins1_5rem font-semibold mb-1 ml-1">
                2020-2022
              </h3>
              <div className="relative">
                <div className="absolute top-[2.6rem] right-[8.7rem] bg-white w-0.5 h-20"></div>
              </div>
            </div>
            <div id="desc" className="ml-20">
              <h4 className="text-poppins1rem font-medium ">
                IT IN MOBILE APP AND WEB DEVELOPMENT
                <br />- STI FAIRVIEW
              </h4>
              <p className="text-poppins1rem ml-5  ">
                Senior high school program (Grade 11 - 12)
              </p>
            </div>
          </div>
        </div>
        <h1 className="text-subheadingpoppins2rem font-semibold ml-16 text-center">
          &lt;Education /&gt;
        </h1>
      </div>
      <CircuitBorder flip={true} />
      <div className="w-full h-auto flex flex-row items-center justify-center my-24">
        <h1 className="text-subheadingpoppins2rem font-semibold mr-16 text-center">
          &lt;Education /&gt;
        </h1>
        <div
          id="Desc"
          className="bg-forbentobg p-7 rounded-3xl w-[30rem] h-[20rem] flex flex-col items-center text-center justify-center"
        >
          <div id="2022-2024" className="text-start mb-5 w-[410px]">
            <div id="year" className="flex justify-start">
              <div className="bg-green-900 flex justify-center items-center w-10 h-10 rounded-full">
                <span className="material-symbols-outlined">school</span>
              </div>
              <h3 className="text-poppins1_5rem font-semibold mb-1 ml-1">
                2022-2024
              </h3>
              <div className="relative">
                <div className="absolute top-[2.6rem] right-[8.7rem] bg-white w-0.5 h-20"></div>
              </div>
            </div>
            <div id="desc" className="ml-20">
              <h4 className="text-poppins1rem font-medium ">
                ASSOCIATES IN COMPUTER TECHNOLOGY <br />- STI SAN JOSE DEL MONTE
              </h4>
              <p className="text-poppins1rem ml-5  ">2 years college program</p>
            </div>
          </div>

          <div id="2022-2024" className="text-start mb-4 w-[410px]">
            <div id="year" className="flex justify-start">
              <div className="bg-green-900 flex justify-center items-center w-10 h-10 rounded-full">
                <span className="material-symbols-outlined">school</span>
              </div>
              <h3 className="text-poppins1_5rem font-semibold mb-1 ml-1">
                2020-2022
              </h3>
              <div className="relative">
                <div className="absolute top-[2.6rem] right-[8.7rem] bg-white w-0.5 h-20"></div>
              </div>
            </div>
            <div id="desc" className="ml-20">
              <h4 className="text-poppins1rem font-medium ">
                IT IN MOBILE APP AND WEB DEVELOPMENT
                <br />- STI FAIRVIEW
              </h4>
              <p className="text-poppins1rem ml-5  ">
                Senior high school program (Grade 11 - 12)
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResumeSection;
