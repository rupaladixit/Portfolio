"use client";

import { useEffect, useRef, useState } from "react";
import { Code2 } from "lucide-react";

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`p-8 space-y-8 bg-[#061423] border border-[#1e293b] rounded-2xl transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Code2 className="h-7 w-7 text-cyan-400" />
          <h2 className="text-3xl font-bold">Skills</h2>
        </div>
        <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />
      </div>

      {/* Programming */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Programming</h3>
        <div className="flex flex-wrap gap-3">
          {["JavaScript", "TypeScript", "Jquery", "HTML5", "CSS3", "SQL"].map(
            (skill) => (
              <span
                key={skill}
                className="px-4 py-1.5 text-sm bg-blue-900/40 text-blue-300 border border-blue-500/40 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>

      {/* Frameworks */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Frameworks</h3>
        <div className="flex flex-wrap gap-3">
          {["React","Redux","RTK Query","React Router","Chakra UI","Material UI","Tailwind CSS","Bootstrap"].map((skill) => (
            <span
              key={skill}
              className="px-4 py-1.5 text-sm bg-emerald-900/40 text-emerald-300 border border-emerald-500/40 rounded-full hover:bg-emerald-600 hover:text-white transition-all duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Tools</h3>
        <div className="flex flex-wrap gap-3">
          {["Git", "GitHub", "VS Code", "Figma", "Vite", "WordPress"].map((skill) => (
            <span
              key={skill}
              className="px-4 py-1.5 text-sm bg-orange-900/40 text-orange-300 border border-orange-500/40 rounded-full hover:bg-orange-600 hover:text-white transition-all duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
