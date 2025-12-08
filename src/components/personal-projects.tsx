"use client"

import { Github, ExternalLink, ChevronDown, FolderGit2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack online shopping platform with payment integration and admin dashboard",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team features",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather tracking app with location-based forecasts",
    tags: ["React", "API", "Charts", "CSS3"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Portfolio Builder",
    description: "Dynamic portfolio generator with customizable themes and templates",
    tags: ["Next.js", "Sanity", "TypeScript", "Tailwind"],
    github: "https://github.com",
    demo: "https://example.com",
  },
]

export function PersonalProjects() {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
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
      className="space-y-6 bg-card border-2 border-primary/20 rounded-lg p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500"
    >
      <div
        className={`space-y-3 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center gap-2">
          <FolderGit2 className="h-7 w-7 text-primary" />
          <h2 className="text-3xl font-bold">Personal Projects</h2>
        </div>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-cyan-400 rounded-full" />
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`rounded-lg bg-muted/50 border border-border transition-all duration-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
            }}
          >
            <button
              onClick={() => setExpandedProject(expandedProject === index ? null : index)}
              className="w-full p-4 flex items-center justify-between hover:bg-muted transition-colors text-left"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
              <ChevronDown
                className={`h-5 w-5 text-primary flex-shrink-0 ml-2 transition-transform ${
                  expandedProject === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {expandedProject === index && (
              <div className="border-t border-border p-4 space-y-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-primary/20 text-primary border border-primary/50 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 text-sm bg-card border border-primary text-primary rounded hover:bg-primary/10 transition-colors flex items-center justify-center gap-1"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 text-sm bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors flex items-center justify-center gap-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
