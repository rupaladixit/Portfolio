"use client"

import { useEffect, useRef, useState } from "react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={sectionRef}
      className={`p-6 space-y-4 bg-card border-2 border-primary/20 rounded-lg hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">About Me</h2>
        <div className="h-1 w-16 bg-gradient-to-r from-primary to-cyan-400 rounded-full" />
      </div>

      <div className="space-y-3 text-sm leading-relaxed">
        <p className="text-foreground/90">
          I'm <span className="text-primary font-semibold">Dixit</span>, a frontend developer passionate about creating
          beautiful and performant web applications.
        </p>

        <p className="text-muted-foreground">
          Results-driven Front-End Developer with 4+ years of experience building responsive, user
          centric web applications. Expertise in React.js, JavaScript, and modern front-end technologies 
          with a proven track record of improving application performance by 40% and reducing load 
          times. Passionate about creating seamless user experiences and writing clean, maintainable 
          code.
        </p>
      </div>
    </div>
  )
}
