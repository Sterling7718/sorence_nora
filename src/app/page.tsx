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
import Footer from "./components/Footer";

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
      },
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
    <main
      draggable="false" // Prevent image dragging
      className="relative z-10 h-screen w-full items-center justify-center overflow-y-auto overflow-x-hidden text-center font-sans text-foregroundparchment"
      style={{ userSelect: "none" }}
    >
      {/* Changed overflow-hidden to overflow-y-auto to allow vertical scrolling */}

      {isVisible && (
        <div className="sticky top-3 z-20 border">
          <NavBarSticky />
        </div>
      )}

      <div id="home" className="h-screen border pt-1">
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
      <div id="footer" className="border">
        <Footer />
      </div>
      <Background />
    </main>
  );
}
