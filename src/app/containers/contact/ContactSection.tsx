import Header from "@/app/components/Header";
import React from "react";

const ContactSection = () => {
  return (
    <main className="mb-6 flex h-auto w-full flex-col items-center justify-start">
      <Header title={"Message me"} />
      <form className="flex h-auto w-[30rem] flex-col items-center justify-center space-y-4 rounded-3xl p-7 text-center">
        {/* Name Input */}
        <input
          type="text"
          placeholder="Name"
          className="w-full rounded-lg bg-forbentobg p-3 text-poppins1rem placeholder:text-gray-500"
        />
        {/* Flexbox layout with space between elements */}
        {/* Email Input */}
        <input
          type="text"
          placeholder="Email"
          className="w-full rounded-lg bg-forbentobg p-3 text-poppins1rem placeholder:text-gray-500"
        />
        {/* Subject Input */}
        <input
          type="text"
          placeholder="Subject"
          className="w-full rounded-lg bg-forbentobg p-3 text-poppins1rem placeholder:text-gray-500"
        />
        {/* Message Textarea */}
        <textarea
          placeholder="Message"
          className="h-32 w-full resize-none rounded-lg bg-forbentobg p-3 text-poppins1rem placeholder:text-gray-500"
        ></textarea>
        {/* Send Button */}
        <button
          type="submit"
          className="mt-4 rounded-full bg-blue-500 px-7 py-2 text-foregroundparchment transition duration-300 hover:bg-blue-700"
        >
          Send
        </button>
        {/* Button with hover effect */}
      </form>
    </main>
  );
};

export default ContactSection;
