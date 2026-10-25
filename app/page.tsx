import About from "@/components/sections/about"
import Contact from "@/components/sections/contact"
import Deployment from "@/components/sections/deployment"
import Footer from "@/components/sections/footer"
import Hero from "@/components/sections/hero"
import Projects from "@/components/sections/projects"
import Resume from "@/components/sections/resume"
import ScrollToTop from "@/components/common/scroll-to-top"
import Skills from "@/components/sections/skills"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <Skills />
      <Deployment />
      <About />
      <Resume />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
