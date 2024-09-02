"use client";
import React, { useEffect, useRef, useState } from "react";
import Background from "./components/Background";
import HeroSection from "./containers/hero/HeroSection";
import SkillSection from "./containers/skills/SkillSection";
import ProjectsSection from "./containers/projects/ProjectsSection";
import ResumeSection from "./containers/resume/ResumeSection";
import ContactSection from "./containers/contact/ContactSection";
import NavBar from "./components/NavBar";
import NavBarSticky from "./components/NavBarSticky";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);

        // Check if the target element is scrolled 100px below
        if (entry.boundingClientRect.bottom <= 30) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.4, // Adjust this value to control when the component should appear
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <main className=" text-foregroundparchment font-sans h-screen overflow-y-auto text-center z-10 relative w-full">
      {/* Changed overflow-hidden to overflow-y-auto to allow vertical scrolling */}

      {isVisible && (
        <div className="sticky top-3 z-20">
          <NavBarSticky />
        </div>
      )}

      <div id="home" className="pt-1 h-screen">
        <div ref={targetRef}>
          <NavBar />
        </div>
        <HeroSection />
      </div>
      <div id="skills" className="border">
        <SkillSection />
      </div>
      <div id="projects" className="border">
        <ProjectsSection />
      </div>
      <div id="resume" className="border">
        <ResumeSection />
      </div>
      <div id="contact" className="border">
        <ContactSection />
      </div>
      <Background />
    </main>
  );
}
