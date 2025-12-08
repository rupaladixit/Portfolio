"use client"

import { Mail, Download } from "lucide-react"
import { useState, useEffect } from "react"

export function Hero() {
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Dixit Rupala"

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-[50vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-6 flex flex-col items-center">
          {/* Avatar Circle */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center text-3xl font-bold text-primary-foreground shadow-lg shadow-primary/50 animate-pulse">
            AM
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-balance animate-in fade-in slide-in-from-bottom-4 duration-700">
            {displayedText}
            <span className="inline-block w-1 h-12 sm:h-16 bg-primary ml-2 animate-pulse" />
          </h1>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-muted-foreground text-balance animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            Frontend Developer
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed text-pretty animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            I specialize in building accessible, user-friendly web applications using React and modern web technologies.
          </p>

          {/* Icon Buttons */}
          <div className="flex items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
            <button
              onClick={scrollToContact}
              className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center transition-all hover:shadow-lg hover:shadow-primary/50"
              aria-label="Contact me"
            >
              <Mail className="h-6 w-6" />
            </button>
            <a
              href="../../public/cv/Dixit.pdf"
              download="Dixit.pdf"
              className="w-12 h-12 rounded-full bg-card hover:bg-card/80 border-2 border-primary text-primary flex items-center justify-center transition-all hover:shadow-lg"
              aria-label="Download CV"
            >
              <Download className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
