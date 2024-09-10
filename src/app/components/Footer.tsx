import React from "react";

const footer = () => {
  return (
    <div>
      <footer className="bg-bg p-6 pb-12 text-center">
        <p className="text-sm text-white max-sm:text-xs">
          About this website: built with React & Next.js (App Router & Server
          Actions), TypeScript, Tailwind CSS, React Hook Form & formspree.io
          (Serverless), Vercel Hosting
        </p>
        {/* Paragraph with the specified content */}
      </footer>
    </div>
  );
};

export default footer;
