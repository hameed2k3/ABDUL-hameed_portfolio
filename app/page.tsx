import About from "@/components/sections/about"
import CapabilityShowcase from "@/components/sections/capability-showcase"
import Contact from "@/components/sections/contact"
import Footer from "@/components/sections/footer"
import Hero from "@/components/sections/hero"
import Preloader from "@/components/common/preloader"
import Projects from "@/components/sections/projects"
import Resume from "@/components/sections/resume"
import ScrollToTop from "@/components/common/scroll-to-top"
import Skills from "@/components/sections/skills"

export default function Home() {
  return (
    <>
      <Preloader />
      <main className="studio-shell min-h-screen">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="studio-grid absolute inset-0 opacity-40" />
          <div className="studio-noise absolute inset-0 opacity-50" />
          
          {/* Glass background light sources & beams */}
          <div className="studio-beam absolute left-[8%] top-0 h-[48rem] w-36 -rotate-12 opacity-50" />
          <div className="studio-beam absolute right-[12%] top-[12rem] h-[44rem] w-32 rotate-12 opacity-35" />
          <div className="studio-beam absolute left-[45%] top-[60rem] h-[50rem] w-40 -rotate-45 opacity-25" />

          {/* Luminous Ambient Orbs */}
          <div className="absolute left-[-10rem] top-12 h-[32rem] w-[32rem] rounded-full bg-gradient-to-tr from-cyan-500/20 via-sky-400/15 to-transparent blur-[130px] animate-pulse-soft" />
          <div className="absolute right-[-10rem] top-[30rem] h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-purple-600/18 via-indigo-500/12 to-transparent blur-[130px]" />
          <div className="absolute left-[20%] top-[80rem] h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-orange-500/15 via-amber-400/10 to-transparent blur-[140px]" />
          <div className="absolute right-[5%] bottom-[40rem] h-[34rem] w-[34rem] rounded-full bg-gradient-to-bl from-cyan-400/15 via-teal-500/10 to-transparent blur-[140px]" />
        </div>

        <Hero />
        <Projects />
        <CapabilityShowcase />
        <Skills />
        <About />
        <Resume />
        <Contact />
        <Footer />
        <ScrollToTop />
      </main>
    </>
  )
}

