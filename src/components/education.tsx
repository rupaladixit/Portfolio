"use client";

import { GraduationCap, School } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const education = [
  {
    degree: "Bachelor of Computer Application (BCA)",
    school: "Saurashtra University",
    period: "CGPA : 65.23%",
    description:
      "Completed BCA with solid foundation in computer applications and programming.",
    icon: GraduationCap,
  },
  {
    degree: "Higher Secondary (H.S.C - 12th)",
    school: "Vadviyala High School, Gujarat",
    period: "Percentage – 66.37%",
    description: "Focused on core subjects with strong academic performance.",
    icon: School,
  },
  {
    degree: "Secondary School (S.S.C - 10th)",
    school: "Vadviyala High School, Gujarat",
    period: "Percentage – 72.95%",
    description: "Completed secondary education with strong academic results.",
    icon: School,
  },
];

export function Education() {
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
    console.log("Education component mounted");
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`p-8 space-y-8 bg-[#061423] border border-[#1e293b] rounded-2xl transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Header */}
      <div
        className={`space-y-3 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center gap-2">
          <GraduationCap className="h-7 w-7 text-purple-400" />
          <h2 className="text-3xl font-bold">Education</h2>
        </div>
        <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
      </div>

      {/* Timeline */}
      <div className="space-y-10">
        {education.map((edu, index) => (
          <div key={edu.degree} style={{ transitionDelay: `${index * 150}ms` }}>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-900/30 flex items-center justify-center shadow-inner">
                {(() => {
                  const Icon = edu.icon
                  return <Icon className="h-6 w-6 text-purple-300" />
                })()}
              </div>

              <div className="flex-1 space-y-2">
                <h3 className="text-xl font-semibold text-white">
                  {edu.degree}
                </h3>
                <p className="text-purple-300 font-medium">{edu.school}</p>
                <span className="text-sm text-gray-400">{edu.period}</span>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
