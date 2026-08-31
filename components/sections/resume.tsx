"use client"

import { ArrowUpRight, Briefcase, Download, Sparkles } from "lucide-react"
import SectionReveal from "@/components/common/section-reveal"
import GlowPanel from "@/components/common/glow-panel"
import { Button } from "@/components/ui/button"

const experienceCards = [
  {
    company: "Enarxi Innovation Private Limited",
    role: "Software Development Engineer",
    period: "Jan 2026 - Present",
    text:
      "Currently working as a Software Development Engineer since January 2026, building production-grade applications across frontend and backend systems with a focus on product quality, clean implementation, and engaging user experiences.",
    bullets: [
      "Build and ship React.js and Next.js interfaces backed by NestJS, MongoDB, and PostgreSQL.",
      "Contribute to frontend experiences with clearer structure, smoother interaction, and polished visual delivery.",
      "Support full product workflows by working across UI, API integration, and data-backed functionality.",
    ],
  },
  {
    company: "Goeasytrip",
    role: "Junior Software Developer",
    period: "Aug 2025 - Dec 2025",
    text:
      "Previously contributed to a travel booking platform with Java Spring Boot, SOAP integrations, and backend logic for search, booking, and ticketing flows.",
    bullets: [
      "Worked with Amadeus GDS SOAP workflows and session-heavy integrations.",
      "Supported secure and structured travel booking operations.",
      "Built practical engineering depth across API flows and transactional logic.",
    ],
  },
  {
    company: "Growth Spell Software Solution",
    role: "Web Development Intern",
    period: "Apr 2025 - Jun 2025",
    text:
      "Delivered WordPress and content-driven frontend work for international retail and brand showcase use cases.",
    bullets: [
      "Built marketing-led pages with responsive execution.",
      "Extended design systems with custom CSS and JavaScript behaviors.",
      "Learned fast shipping, stakeholder alignment, and production polish.",
    ],
  },
]

export default function Resume() {
  return (
    <section id="resume" className="section-spacing relative">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <SectionReveal>
            <span className="glass-tag mb-5">Experience</span>
            <h2 className="font-[var(--font-display)] text-4xl font-semibold tracking-tight md:text-6xl">
              Experience shaped by <span className="studio-text-gradient">product work, engineering depth, and steady growth</span>.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              My experience so far has helped me grow across frontend delivery, backend integration, and building
              products that feel more thoughtful and complete for real users.
            </p>

            <GlowPanel className="mt-8 p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-cyan-300/30 bg-cyan-400/10 p-3 text-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-[var(--font-display)] text-2xl font-semibold text-white">Current focus</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Building product systems at Enarxi with React.js, Next.js, NestJS, MongoDB, and PostgreSQL while
                    strengthening my frontend presentation and interaction skills.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["React.js", "Next.js", "NestJS", "MongoDB", "PostgreSQL", "Framer Motion"].map((item) => (
                      <span key={item} className="glass-pill text-[11px]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlowPanel>

            <Button asChild className="glass-button-secondary mt-6">
              <a href="/asset/Abdul_Hameed__Developer_ (1).pdf" target="_blank" rel="noopener noreferrer" download>
                Download Resume <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </SectionReveal>

          <div className="space-y-5">
            {experienceCards.map((card, index) => (
              <SectionReveal key={card.company} delay={index * 0.08}>
                <GlowPanel className="p-6 md:p-7">
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-cyan-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <h3 className="font-[var(--font-display)] text-2xl font-semibold text-white">{card.role}</h3>
                      <p className="mt-1 font-medium text-cyan-300">{card.company}</p>
                    </div>
                    <div className="flex flex-col items-start gap-2 md:items-end">
                      {index === 0 ? (
                        <span className="glass-tag border-emerald-400/30 bg-emerald-400/10 text-emerald-200 shadow-[0_0_15px_rgba(52,211,153,0.2)] text-[10px]">
                          Current Role
                        </span>
                      ) : null}
                      <span className="glass-pill text-xs">
                        {card.period}
                      </span>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-300">{card.text}</p>
                  <div className="mt-5 grid gap-3 md:grid-cols-3">
                    {card.bullets.map((bullet) => (
                      <div key={bullet} className="glass-card p-4 text-xs font-medium leading-6 text-slate-200">
                        {bullet}
                      </div>
                    ))}
                  </div>
                </GlowPanel>
              </SectionReveal>
            ))}

            <SectionReveal delay={0.26}>
              <a
                href="https://www.linkedin.com/in/abdul-hameed-abdul-lathif-567064250/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill border-cyan-300/40 px-5 py-3 text-cyan-200 hover:border-cyan-300/60 hover:text-white"
              >
                View full experience on LinkedIn <ArrowUpRight className="h-4 w-4" />
              </a>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

