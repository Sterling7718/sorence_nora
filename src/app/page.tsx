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
    <main className="text-foregroundparchment font-sans relative w-screen h-screen overflow-y-auto">
      {/* Changed overflow-hidden to overflow-y-auto to allow vertical scrolling */}
      <div className="z-10 relative w-full">
        <NavBar />
        <div className="text-center">
          <div id="home">
            <HeroSection />
          </div>
          <div id="skills">
            <SkillSection />
          </div>
          <div id="projects">
            <ProjectsSection />
          </div>
          <div id="resume">
            <ResumeSection />
          </div>
          <div id="contact">
            <ContactSection />
          </div>
        </div>
      </div>
      <Background />
    </main>
  );
}
