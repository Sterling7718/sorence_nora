import React from "react";
import Background from "./components/Background";
import HeroSection from "./containers/hero/HeroSection";
import SkillSection from "./containers/skills/SkillSection";
import ProjectsSection from "./containers/projects/ProjectsSection";
import ResumeSection from "./containers/resume/ResumeSection";
import ContactSection from "./containers/contact/ContactSection";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden">
      <div className=" text-white z-10 relative w-full">
        <NavBar />
        <div className="text-center">
          <HeroSection />
          <SkillSection />
          <ProjectsSection />
          <ResumeSection />
          <ContactSection />
        </div>
      </div>
      <Background />
    </main>
  );
}
