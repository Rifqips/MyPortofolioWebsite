"use client";

import { useEffect, useState } from "react";

const sections = [
  "about",
  "skills",
  "projects",
  "contact",
];

export default function useActiveSection() {
  const [activeSection, setActiveSection] =
    useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const element =
          document.getElementById(section);

        if (!element) return;

        const offsetTop = element.offsetTop - 120;
        const height = element.offsetHeight;

        if (
          scrollY >= offsetTop &&
          scrollY < offsetTop + height
        ) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return activeSection;
}