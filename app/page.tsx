import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import LeetCodeProfile from "@/components/leetcode-profile"
import Resume from "@/components/resume"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import CustomCursor from "@/components/custom-cursor"
import Preloader from "@/components/preloader"

export default function Home() {
  return (
    <>
      <Preloader />
      <main className="min-h-screen bg-gradient-to-b from-background to-background/90 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>
          <div className="absolute -top-[30%] -right-[10%] w-[80%] h-[80%] rounded-full bg-purple-900/20 blur-[120px]"></div>
          <div className="absolute -bottom-[30%] -left-[10%] w-[80%] h-[80%] rounded-full bg-blue-900/20 blur-[120px]"></div>
        </div>

        <Hero />
        <About />
        <Projects />
        <Skills />
        <LeetCodeProfile />
        <Resume />
        <Contact />
        <Footer />
        <ScrollToTop />
        <CustomCursor />
      </main>
    </>
  )
}
