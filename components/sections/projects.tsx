"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Boxes, Cuboid, ExternalLink, Layers3, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SectionReveal from "@/components/common/section-reveal"
import GlowPanel from "@/components/common/glow-panel"
import TiltCard from "@/components/common/tilt-card"

const featuredProject = {
  title: "AI Integrated Online Voting System",
  subtitle: "A secure digital voting concept built around trusted participation and product clarity",
  description:
    "This project is the strongest fit for a featured case study because it combines security-heavy thinking, multi-step verification, and a clear user-facing product flow.",
  visual: "/project-featured-cover.png",
  tags: ["React.js", "Security", "OTP", "Blockchain"],
  role: "End-to-end product build",
  challenge:
    "Create a voting experience that feels easy to use while still communicating trust, identity verification, and secure participation.",
  solution:
    "The product combines facial recognition, OTP verification, and blockchain-backed logic to build confidence into the user journey without making the interface feel too technical.",
  outcome:
    "A stronger proof-of-skill project that shows product thinking, frontend structure, and the ability to work on security-oriented workflows.",
}

const projects = [
  {
    title: "AI Integrated Online Voting System",
    description:
      "Secure voting system with facial recognition, OTP verification, and blockchain integration for trusted digital participation.",
    image: "/project-voting-cover.png",
    tags: ["React.js", "Security", "Blockchain"],
    demo: "https://votingsystemonline.vercel.app/",
    category: "Security",
    role: "Full product concept",
  },
  {
    title: "Chettinadu Supermarket Website",
    description:
      "Marketing-led product showcase website built to communicate store identity, promotions, and curated catalog storytelling.",
    image: "/project-supermarket-cover.png",
    tags: ["WordPress", "Showcase", "Responsive"],
    demo: "/project/chettinadu-supermarket",
    category: "Brand Experience",
    role: "Marketing website",
  },
  {
    title: "Grocery Web Application",
    description:
      "Responsive MERN grocery application with authentication, cart flows, and product browsing created for hackathon delivery.",
    image: "/project-grocery-cover.png",
    tags: ["MongoDB", "React.js", "MERN"],
    demo: "https://grocery-web-naanmuthalvan.vercel.app/",
    category: "Product Build",
    role: "Responsive web app",
  },
  {
    title: "Simple Banking System",
    description:
      "Console-based banking application focused on OOP principles, account operations, and structured Java logic.",
    image: "/project-banking-cover.png",
    tags: ["Java", "OOP", "Console"],
    demo: "https://github.com/hameed2k3/Bankingconsole",
    category: "Core Engineering",
    role: "Core logic project",
  },
]

const projectPillars = [
  { icon: Cuboid, title: "Clear visual presentation" },
  { icon: Layers3, title: "Practical product delivery" },
  { icon: Boxes, title: "Strong systems thinking" },
]

export default function Projects() {
  return (
    <section id="projects" className="section-spacing relative">
      <div className="container px-4 md:px-6">
        <SectionReveal className="mb-12 max-w-3xl">
          <span className="glass-tag mb-5">Selected work</span>
          <h2 className="font-[var(--font-display)] text-4xl font-semibold tracking-tight md:text-6xl">
            Work that shows how I approach <span className="studio-text-gradient">engineering, product flow, and presentation</span>.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            These projects reflect the kind of work I enjoy most: building useful applications, solving practical
            problems, and making the final user experience feel more complete.
          </p>
        </SectionReveal>

        <SectionReveal>
          <GlowPanel className="mb-10 overflow-hidden p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr]">
              <div className="glass-card relative overflow-hidden rounded-[1.75rem]">
                <Image
                  src={featuredProject.visual}
                  alt={featuredProject.title}
                  width={1200}
                  height={800}
                  className="h-full min-h-[22rem] w-full object-cover opacity-60 transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(5,10,18,0.45),rgba(5,10,18,0.92)),radial-gradient(circle_at_30%_20%,rgba(103,232,249,0.22),transparent_35%)]" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <span className="glass-tag text-[10px]">
                      Featured project
                    </span>
                    <h3 className="mt-4 font-[var(--font-display)] text-3xl font-semibold text-white">
                      {featuredProject.title}
                    </h3>
                    <p className="mt-2 max-w-lg text-sm leading-7 text-slate-200">{featuredProject.subtitle}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">Case study overview</p>
                  <p className="mt-3 text-base leading-8 text-slate-300">{featuredProject.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {featuredProject.tags.map((tag) => (
                      <span key={tag} className="glass-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="glass-card grid gap-3 p-5 text-sm text-slate-100">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300">Role</span>
                      <p className="mt-1 font-medium text-white">{featuredProject.role}</p>
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300">Challenge</span>
                      <p className="mt-1 text-slate-200">{featuredProject.challenge}</p>
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300">Approach</span>
                      <p className="mt-1 text-slate-200">{featuredProject.solution}</p>
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300">Why it matters</span>
                      <p className="mt-1 text-slate-200">{featuredProject.outcome}</p>
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {projectPillars.map((pillar) => (
                      <div key={pillar.title} className="glass-card p-4 text-xs font-medium text-slate-200">
                        <pillar.icon className="mb-2.5 h-5 w-5 text-cyan-300" />
                        {pillar.title}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </GlowPanel>
        </SectionReveal>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <SectionReveal key={project.title} delay={index * 0.08}>
              <TiltCard className="h-full">
                <GlowPanel className="group h-full overflow-hidden p-4">
                  <div className="relative overflow-hidden rounded-[1.4rem] border border-white/15">
                    <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,transparent,rgba(2,6,23,0.92))]" />
                    <motion.div
                      className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.3),transparent_35%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={900}
                      height={600}
                      className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 z-20">
                      <span className="glass-tag text-[10px]">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <h3 className="font-[var(--font-display)] text-2xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-1 text-sm text-cyan-200">{project.role}</p>
                    </div>
                  </div>

                  <div className="p-3">
                    <p className="text-sm leading-7 text-slate-300">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="glass-pill text-[11px]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-sm text-slate-400">
                        <Sparkles className="h-4 w-4 text-orange-400" />
                        Product proof
                      </span>
                      <Button asChild className="glass-button-secondary py-2 text-xs">
                        <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                          View Project <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </GlowPanel>
              </TiltCard>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="mt-10 text-center">
          <Link
            href="#contact"
            className="glass-pill px-6 py-3.5 text-sm text-slate-200 hover:text-white"
          >
            Need a developer who cares about clean product delivery and frontend quality? <ArrowUpRight className="h-4 w-4" />
          </Link>
        </SectionReveal>
      </div>
    </section>
  )
}

