"use client";

import { useEffect, useRef, useState } from "react";
// (LanguagesIcon import removed because it's not used — using inline SVG instead)

// ✅ Replace with REAL language list
const languages = [
  { name: "English", level: "Professional", percent: "90%" },
  { name: "Hindi", level: "Native", percent: "100%" },
  { name: "Gujarati", level: "Native", percent: "100%" },
];

// ✅ Inline SVG — EXACT same icon as your screenshot
const TranslateIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-languages-icon lucide-languages text-primary"
  >
    <path d="m5 8 6 6" />
    <path d="m4 14 6-6 2-3" />
    <path d="M2 5h12" />
    <path d="M7 2h1" />
    <path d="m22 22-5-10-5 10" />
    <path d="M14 18h6" />
  </svg>
);

export function Languages() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="space-y-6 bg-card border-2 border-primary/20 rounded-2xl p-6 
                 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10
                 transition-all duration-500"
    >
      {/* Title + Icon */}
      <div
        className={`flex items-center gap-3 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <TranslateIcon />
        <h2 className="text-3xl font-bold">Languages</h2>
      </div>

      {/* Bars */}
      <div className="space-y-4">
        {languages.map((language, index) => (
          <div
            key={language.name}
            className={`transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <div className="flex justify-between">
              <span className="font-semibold">{language.name}</span>
              <span className="text-primary font-medium">{language.level}</span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full"
                style={{ width: language.percent }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
