import Header from "@/app/components/Header";
import React, { useState, useRef, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("xeojdzak");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const clearForm = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  useEffect(() => {
    if (state.succeeded) {
      setIsModalOpen(true);
      clearForm();
    }
  }, [state.succeeded]);

  const ThankYouModal = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="rounded-lg bg-forbentobg p-8 text-center">
        <h2 className="text-2xl font-bold text-foregroundparchment">
          Thank you!
        </h2>
        <p>Your message has been sent.</p>
        <button
          className="mt-4 rounded-full bg-blue-500 px-7 py-2 text-foregroundparchment transition duration-300 hover:bg-blue-700"
          onClick={() => setIsModalOpen(false)}
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <main className="mb-6 flex h-auto w-full flex-col items-center justify-start px-4 sm:px-6 lg:px-8">
      <Header title={"Message me"} />
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex h-auto w-full max-w-lg flex-col items-center justify-center space-y-4 rounded-3xl p-7 text-center"
      >
        <input
          type="text"
          placeholder="Name"
          className="w-full rounded-lg bg-forbentobg p-3 text-poppins1rem placeholder:text-gray-500"
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="w-full rounded-lg bg-forbentobg p-3 text-poppins1rem placeholder:text-gray-500"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          className="w-full rounded-lg bg-forbentobg p-3 text-poppins1rem placeholder:text-gray-500"
        />
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
        <button
          type="submit"
          className="mt-4 rounded-full bg-blue-500 px-7 py-2 text-foregroundparchment transition duration-300 hover:bg-blue-700"
          disabled={state.submitting}
        >
          Send
        </button>
      </form>

      {isModalOpen && <ThankYouModal />}
    </main>
  );
};

export default ContactSection;
