"use client";
import React, { useRef, useState, useEffect } from "react";
import NavBar from "./NavBar";
import NavBarSticky from "./NavBarSticky";

const ScrollDisplayComponent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        });
      },
      { rootMargin: "50px 0px 0px 0px" } // Adjust to trigger when the element is 100px down
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
    <div ref={targetRef} className="">
      <NavBar />
      {isVisible && (
        <div className="absolute">
          <NavBarSticky />
        </div>
      )}
    </div>
  );
};

export default ScrollDisplayComponent;

// This component will show the message "You scrolled 100 pixels!"
// when the user scrolls past the element placed 100px from the top.
