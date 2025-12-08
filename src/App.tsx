import { Hero } from "./components/hero"
import { About } from "./components/about"
import { Skills } from "./components/skills"
import { Languages } from "./components/languages"
import { WorkExperience } from "./components/work-experience"
import { Education } from "./components/education"
import { PersonalProjects } from "./components/personal-projects"
import { Contact } from "./components/contact"

export default function App() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Two Column Layout Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                <About />
                <Skills />
                <Languages />
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <WorkExperience />
                <Education />
                <PersonalProjects />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
      </main>
    </>
  )
}
