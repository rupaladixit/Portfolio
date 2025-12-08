"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section
      id="contact"
      className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto max-w-6xl relative">
        <div className="space-y-8">
          <div
            className={`bg-gradient-to-r from-[#4f46e5] via-[#3b82f6] to-[#06b6d4] rounded-xl p-8 border border-primary/30 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center text-white">
              <a href="mailto:dixitrupala07@gmail.com" className="space-y-3 group">
                <div className="mx-auto w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all">
                  <Mail className="h-7 w-7 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white text-lg">Email</p>
                  <p className="text-sm text-white/80 group-hover:text-white transition-colors">
                    dixitrupala07@gmail.com
                  </p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/dixit-rupala-a7373a21a/"
                target="_blank"
                rel="noopener noreferrer"
                className="space-y-3 group"
              >
                <div className="mx-auto w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all">
                  <Linkedin className="h-7 w-7 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white text-lg">LinkedIn</p>
                  <p className="text-sm text-white/80 group-hover:text-white transition-colors">
                    linkedin.com/in/dixit
                  </p>
                </div>
              </a>
              <a
                href="https://github.com/dixitrupala"
                target="_blank"
                rel="noopener noreferrer"
                className="space-y-3 group"
              >
                <div className="mx-auto w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all">
                  <Github className="h-7 w-7 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white text-lg">GitHub</p>
                  <p className="text-sm text-white/80 group-hover:text-white transition-colors">
                    github.com/dixit
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div
            className={`text-center text-sm text-muted-foreground transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <p>© 2025 Dixit Rupala. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
