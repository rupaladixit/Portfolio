"use client"

import { Briefcase, Laptop, Code } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    title: "Frontend Developer",
    company: "Vartit Technology PVT LTD",
    period: "08/2022 - Present",
    description:
      "Developed real-time parental monitoring dashboards using React.js, WebSockets, WebRTC live screen streaming, advanced filtering, and dynamic data visualization for device activity tracking.",
    icon: Laptop,
  },
  {
    title: "Frontend Developer",
    company: "Novus Logics Private Limited",
    period: "04/2022 – 07/2022",
    description:
      "Built responsive, pixel-perfect UI using HTML, CSS, JavaScript, and React; optimized performance, implemented dynamic components, and converted Figma/XD designs into modern, mobile-first webpages.",
    icon: Code,
  },
  {
    title: "Internship",
    company: "Swarck Infolabs Private Limited",
    period: "02/2021 – 04/2022",
    description:
      "Completed a 3-month web development training program focused on HTML, CSS, JavaScript, jQuery, and React.js with hands-on project implementation.",
    icon: Code,
  },
]

export function WorkExperience() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

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
          <Briefcase className="h-7 w-7 text-cyan-400" />
          <h2 className="text-3xl font-bold">Work Experience</h2>
        </div>
        <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />
      </div>

      <div className="space-y-10 border-l border-cyan-700/40 ml-4 pl-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-lg bg-[#0b1b30]/60 border border-[#1e293b] shadow-md transition-all duration-500 hover:border-cyan-400/40 hover:shadow-cyan-400/10 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            {/* Timeline Dot */}
            <div className="absolute -left-8 top-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-[#061423]" />

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-900/30 flex items-center justify-center shadow-inner">
                {(() => {
                  const Icon = exp.icon
                  return <Icon className="h-6 w-6 text-cyan-300" />
                })()}
              </div>

              <div className="flex-1 space-y-2">
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <p className="text-cyan-300 font-medium">{exp.company}</p>
                <span className="text-sm text-gray-400">{exp.period}</span>
                <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}