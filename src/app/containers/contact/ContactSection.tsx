import Header from "@/app/components/Header";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("xeojdzak");
  if (state.succeeded) {
    return <p>Thanks for messaging!</p>;
  }
  return (
    <main className="mb-6 flex h-auto w-full flex-col items-center justify-start">
      <Header title={"Message me"} />
      <form
        onSubmit={handleSubmit}
        className="flex h-auto w-[30rem] flex-col items-center justify-center space-y-4 rounded-3xl p-7 text-center"
      >
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
          name="email"
          className="w-full rounded-lg bg-forbentobg p-3 text-poppins1rem placeholder:text-gray-500"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        {/* Subject Input */}
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          className="w-full rounded-lg bg-forbentobg p-3 text-poppins1rem placeholder:text-gray-500"
        />
        {/* Message Textarea */}
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          className="h-32 w-full resize-none rounded-lg bg-forbentobg p-3 text-poppins1rem placeholder:text-gray-500"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        {/* Send Button */}
        <button
          type="submit"
          className="mt-4 rounded-full bg-blue-500 px-7 py-2 text-foregroundparchment transition duration-300 hover:bg-blue-700"
          disabled={state.submitting}
        >
          Send
        </button>
      </form>
    </main>
  );
};

export default ContactSection;
