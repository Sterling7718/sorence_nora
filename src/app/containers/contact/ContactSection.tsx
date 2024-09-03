import Header from "@/app/components/Header";
import React from "react";

const ContactSection = () => {
  return (
    <main className="w-full h-auto flex items-center justify-start flex-col mb-6">
      <Header title={"Message me"} />
      <form className=" p-7 rounded-3xl w-[30rem] h-auto flex flex-col items-center text-center justify-center space-y-4">
        {/* Name Input */}
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded-lg text-poppins1rem bg-forbentobg placeholder:text-gray-500"
        />
        {/* Flexbox layout with space between elements */}
        {/* Email Input */}
        <input
          type="text"
          placeholder="Email"
          className="w-full p-3 rounded-lg text-poppins1rem bg-forbentobg placeholder:text-gray-500"
        />
        {/* Subject Input */}
        <input
          type="text"
          placeholder="Subject"
          className="w-full p-3 rounded-lg text-poppins1rem bg-forbentobg placeholder:text-gray-500"
        />
        {/* Message Textarea */}
        <textarea
          placeholder="Message"
          className="w-full p-3 rounded-lg text-poppins1rem bg-forbentobg placeholder:text-gray-500 h-32 resize-none"
        ></textarea>
        {/* Send Button */}
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-foregroundparchment py-2 px-7 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Send
        </button>
        {/* Button with hover effect */}
      </form>
    </main>
  );
};

export default ContactSection;
