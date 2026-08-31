"use client"

import { ArrowRight, Boxes, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroScene from "./hero-scene"
import SectionReveal from "@/components/common/section-reveal"

const currentStack = [
  "React.js",
  "Next.js",
  "NestJS",
  "MongoDB",
  "PostgreSQL",
  "Framer Motion",
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 md:pt-40">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionReveal className="max-w-2xl">
            <span className="glass-tag mb-6">
              Software Development Engineer
            </span>
            <h1 className="font-[var(--font-display)] text-5xl font-semibold leading-[0.94] tracking-tight text-white md:text-7xl">
              Building <span className="studio-text-gradient">modern web products</span> that feel clear, reliable,
              and well made.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              I&apos;m Abdul Hameed, a Software Development Engineer at Enarxi Innovation Private Limited. I work across
              frontend systems, backend integration, and product-facing interfaces using React.js, Next.js, NestJS,
              MongoDB, and PostgreSQL.
            </p>

            <div className="glass-card mt-6 grid gap-4 p-5 text-sm text-slate-200 sm:grid-cols-3">
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300">Role</span>
                <p className="mt-1 font-medium text-white">Software Development Engineer</p>
              </div>
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300">Current</span>
                <p className="mt-1 font-medium text-white">Enarxi Innovation Private Limited</p>
              </div>
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300">Focus</span>
                <p className="mt-1 font-medium text-white">Product systems & frontend quality</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {currentStack.map((item) => (
                <span key={item} className="glass-pill">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="glass-button-primary">
                <Link href="#projects">
                  View Selected Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" className="glass-button-secondary">
                <Link href="#contact">Let&apos;s Talk</Link>
              </Button>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="glass-panel glass-shine p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-400/10 text-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  <Boxes className="h-5 w-5" />
                </div>
                <h2 className="font-[var(--font-display)] text-xl font-semibold text-white">Product Systems</h2>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  I build interfaces and workflows that are meant to ship, scale, and support real users.
                </p>
              </div>
              <div className="glass-panel glass-shine p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-orange-300/30 bg-orange-400/10 text-orange-200 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h2 className="font-[var(--font-display)] text-xl font-semibold text-white">Frontend Polish</h2>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  I use motion and layout carefully so the experience feels modern without becoming noisy or artificial.
                </p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.12}>
            <HeroScene />
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}

