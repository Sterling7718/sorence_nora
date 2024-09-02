import Header from "@/app/components/Header";
import React from "react";

const ResumeSection = () => {
  return (
    <main className="w-full h-auto flex flex-col items-center justify-center mb-6">
      {/* Centered the entire main content */}
      <Header title={"About me"} />
      <div className="w-full h-auto flex flex-row items-center justify-center mb-6">
        {/* Adjusted to flex-col for vertical alignment */}
        <h1 className="text-subheadingpoppins2rem font-semibold mr-16 text-center">
          &lt;Personal Info /&gt;
        </h1>
        <div
          id="descriptions"
          className="bg-forbentobg p-7 rounded-3xl  w-fit flex flex-col items-center"
        >
          {/* Added flex and items-center to center the paragraph within the div */}
          <div className="flex justify-center text-center">
            {/* Adjusted width to full and text alignment to left for the paragraph */}
            <div className="text-poppins1rem text-left grid grid-cols-2 gap-x-[1px]">
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
    </main>
  );
};

export default ResumeSection;
