"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Cog, Cuboid, Layers3, ShieldCheck } from "lucide-react"
import Image from "next/image"
import SectionReveal from "@/components/common/section-reveal"
import GlowPanel from "@/components/common/glow-panel"

const valueBlocks = [
  {
    icon: Layers3,
    title: "Product Frontend Systems",
    text: "Structured interfaces, thoughtful UI decisions, and motion that supports usability instead of distracting from it.",
  },
  {
    icon: ShieldCheck,
    title: "Backend and API Delivery",
    text: "Full-stack thinking across frontend, API integration, data flow, and reliability so the product works as well as it looks.",
  },
  {
    icon: Cuboid,
    title: "Interactive Web Experiences",
    text: "Frontend experiences shaped by motion, layered visuals, and modern presentation without relying on artificial-looking effects.",
  },
  {
    icon: Cog,
    title: "Deployment and Reliability",
    text: "Delivery, debugging, iteration, and dependable engineering workflows that keep projects moving with quality.",
  },
]

export default function About() {
  return (
    <section id="about" className="section-spacing relative">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionReveal>
            <GlowPanel className="h-full overflow-hidden p-6 md:p-8">
              <div className="glass-card relative overflow-hidden rounded-[1.75rem]">
                <Image
                  src="/abdul-hameed-profile.jpg"
                  alt="Abdul Hameed"
                  width={720}
                  height={840}
                  className="h-[25rem] w-full object-cover object-center transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="glass-tag text-[10px]">Who I Am</span>
                  <p className="mt-3 font-[var(--font-display)] text-2xl font-semibold text-white">
                    Building practical products with a strong eye for frontend quality and user experience.
                  </p>
                </div>
              </div>
            </GlowPanel>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <span className="glass-tag mb-5">About</span>
            <h2 className="font-[var(--font-display)] text-4xl font-semibold tracking-tight md:text-6xl">
              I combine product engineering with <span className="studio-text-gradient">frontend judgment and system thinking</span>.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              I am Abdul Hameed, a Software Development Engineer at Enarxi Innovation Private Limited. Since January
              2026, I have been building production-grade applications across frontend and backend systems with a focus
              on building interfaces that are clean, modern, and dependable.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              My work sits between React-based product delivery, backend-backed reliability, and interaction design that
              feels natural. I enjoy building websites and applications where engineering quality and presentation both
              matter.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {valueBlocks.map((block, index) => (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <GlowPanel className="h-full p-5">
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl border border-cyan-300/30 bg-cyan-400/10 p-3 text-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                        <block.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-[var(--font-display)] text-xl font-semibold text-white">{block.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-300">{block.text}</p>
                      </div>
                    </div>
                  </GlowPanel>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <span className="glass-pill text-cyan-200">
                Frontend + backend
              </span>
              <span className="glass-pill">Chennai, India</span>
              <span className="glass-pill">1+ Years Experience</span>
              <span className="glass-pill">CGPA 8.4 / 10</span>
              <a
                href="https://www.linkedin.com/in/abdul-hameed-abdul-lathif-567064250/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill border-cyan-300/40 text-cyan-200 hover:border-cyan-300/60 hover:text-white"
              >
                Connect on LinkedIn <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}

