import React from "react";
import Background from "./components/Background";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="z-10 text-white flex items-center justify-center absolute">
        <div className="text-center">
          <p>hi, I&apos;m</p>
          <h1>Sorence Nora</h1>
        </div>
      </div>
      <Background />
    </div>
  );
}
