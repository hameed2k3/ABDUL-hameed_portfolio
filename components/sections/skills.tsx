"use client"

import { Braces, Database, GitBranch, Layers3 } from "lucide-react"
import SectionReveal from "@/components/common/section-reveal"
import GlowPanel from "@/components/common/glow-panel"

const groups = [
  {
    icon: Layers3,
    title: "Frontend",
    items: ["React.js", "Next.js", "Framer Motion"],
    text: "UI systems, interaction design, and polished frontend implementation for modern product experiences.",
  },
  {
    icon: Braces,
    title: "Interactive Presentation",
    items: ["Framer Motion", "Scroll behavior", "Layered composition"],
    text: "Motion, pacing, and visual layering used to make websites feel more engaging while staying readable.",
  },
  {
    icon: Database,
    title: "Backend",
    items: ["NestJS", "MongoDB", "PostgreSQL"],
    text: "Practical backend support for product workflows, APIs, and data-backed frontend experiences.",
  },
  {
    icon: GitBranch,
    title: "Delivery",
    items: ["Git", "Deployment", "Debugging", "AI-assisted workflows"],
    text: "Release discipline, iteration, debugging, and dependable implementation across the delivery lifecycle.",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-spacing relative">
      <div className="container px-4 md:px-6">
        <SectionReveal className="mb-12 max-w-3xl">
          <span className="glass-tag mb-5">Stack</span>
          <h2 className="font-[var(--font-display)] text-4xl font-semibold tracking-tight md:text-6xl">
            The stack behind the <span className="studio-text-gradient">products, interfaces, and delivery work</span>.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            This is the stack I use across frontend implementation, backend support, interaction work, and day-to-day
            delivery.
          </p>
        </SectionReveal>

        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((group, index) => (
            <SectionReveal key={group.title} delay={index * 0.06}>
              <GlowPanel className="h-full p-6 md:p-7">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-cyan-300/30 bg-cyan-400/10 p-3 text-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                    <group.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-[var(--font-display)] text-2xl font-semibold text-white">{group.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{group.text}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="glass-pill">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlowPanel>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

