"use client"

import { Layers3, Orbit, ScanSearch, Zap } from "lucide-react"
import SectionReveal from "@/components/common/section-reveal"
import GlowPanel from "@/components/common/glow-panel"

const pillars = [
  {
    icon: Layers3,
    title: "Frontend structure",
    text: "I focus on layout, hierarchy, and interaction so the product feels clear from the first screen to the last.",
  },
  {
    icon: Orbit,
    title: "Interaction quality",
    text: "Motion is used to support readability and confidence, not to pull attention away from the product itself.",
  },
  {
    icon: ScanSearch,
    title: "Backend awareness",
    text: "I work comfortably with APIs, data-backed flows, and practical product logic that supports the frontend.",
  },
  {
    icon: Zap,
    title: "Delivery mindset",
    text: "I care about implementation quality, debugging, and shipping work that feels solid in real use.",
  },
]

export default function CapabilityShowcase() {
  return (
    <section id="capability" className="section-spacing relative">
      <div className="container px-4 md:px-6">
        <SectionReveal className="mb-12 max-w-3xl">
          <span className="glass-tag mb-5">How I work</span>
          <h2 className="font-[var(--font-display)] text-4xl font-semibold tracking-tight md:text-6xl">
            I try to make every product feel <span className="studio-text-gradient">clear, useful, and well finished</span>.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            My approach is simple: understand the product, build the flow carefully, connect it to real logic, and
            make the final experience feel polished without becoming overdesigned.
          </p>
        </SectionReveal>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionReveal>
            <GlowPanel className="overflow-hidden p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">Working principle</p>
              <h3 className="mt-3 font-[var(--font-display)] text-3xl font-semibold text-white">Good products feel simple on the surface because the engineering underneath is thoughtful.</h3>
              <div className="mt-6 space-y-4">
                {[
                  ["Understand the product", "I start with the business goal, the user flow, and what the interface actually needs to do."],
                  ["Build the system clearly", "I shape the frontend around clean components, dependable data flow, and practical backend integration."],
                  ["Polish the experience", "I improve the final experience with motion, hierarchy, and presentation that support clarity."],
                ].map(([title, text], index) => (
                  <div key={title} className="glass-card grid gap-3 p-4 md:grid-cols-[auto_1fr]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-400/10 text-sm font-bold text-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                      0{index + 1}
                    </div>
                    <div>
                      <h4 className="font-[var(--font-display)] text-xl font-semibold text-white">{title}</h4>
                      <p className="mt-1 text-sm leading-7 text-slate-300">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlowPanel>
          </SectionReveal>

          <div className="grid gap-4">
            {pillars.map((pillar, index) => (
              <SectionReveal key={pillar.title} delay={index * 0.08}>
                <GlowPanel className="h-full p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl border border-cyan-300/30 bg-cyan-400/10 p-3 text-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                      <pillar.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-[var(--font-display)] text-xl font-semibold text-white">{pillar.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{pillar.text}</p>
                    </div>
                  </div>
                </GlowPanel>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

