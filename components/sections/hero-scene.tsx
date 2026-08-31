"use client"

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const proofRows = [
  { label: "Frontend systems", value: "React.js / Next.js" },
  { label: "Backend support", value: "NestJS / MongoDB / PostgreSQL" },
  { label: "Work style", value: "Clean delivery and polished interfaces" },
]

export default function HeroScene() {
  const reducedMotion = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const yBack = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [20, -45])
  const yMid = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [40, -65])
  const yFront = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [60, -95])
  const rotateFrame = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [-3, 5])

  return (
    <div ref={ref} className="studio-frame relative h-[32rem] overflow-hidden p-6 md:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.25),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(249,115,22,0.22),transparent_25%),linear-gradient(145deg,rgba(5,10,18,0.98),rgba(10,14,24,0.86))]" />
      <motion.div
        style={{ rotate: rotateFrame }}
        className="absolute inset-[10%] rounded-[2.2rem] border border-cyan-200/20 bg-white/[0.04] shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.18),0_0_40px_rgba(34,211,238,0.1)]"
      />
      <div className="absolute inset-4 rounded-[2rem] border border-white/15" />

      {/* Top Glass Card */}
      <motion.div
        style={{ y: yBack }}
        className="glass-card absolute right-6 top-8 w-60 p-4 shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(34,211,238,0.15)]"
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-200">Current Role</span>
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
        </div>
        <div className="space-y-3 text-sm text-slate-200">
          <p className="font-[var(--font-display)] text-lg font-semibold text-white">Software Development Engineer</p>
          <p className="text-xs text-slate-300">Building product-facing applications at Enarxi Innovation Private Limited.</p>
          <div className="grid grid-cols-2 gap-2 pt-1 text-xs font-medium">
            <div className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">Frontend</div>
            <div className="rounded-xl border border-orange-300/30 bg-orange-300/10 px-3 py-2 text-orange-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">Backend</div>
          </div>
        </div>
      </motion.div>

      {/* Middle Glass Card */}
      <motion.div
        style={{ y: yMid }}
        className="glass-panel absolute left-6 top-20 w-[19rem] p-5 shadow-[0_25px_50px_rgba(0,0,0,0.6)]"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-200">What I Build</p>
        <h3 className="mt-2 font-[var(--font-display)] text-2xl font-semibold text-white">Frontend experiences backed by real systems.</h3>
        <p className="mt-2.5 text-sm leading-7 text-slate-300">
          I care about usability, structure, and the quality of the final product experience.
        </p>
      </motion.div>

      {/* Bottom Glass Card */}
      <motion.div
        style={{ y: yFront }}
        className="glass-card absolute bottom-8 left-12 right-8 p-5 shadow-[0_30px_60px_rgba(0,0,0,0.7),0_0_30px_rgba(249,115,22,0.12)]"
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-orange-200">Working Snapshot</span>
          <span className="glass-tag text-[10px]">
            2026
          </span>
        </div>
        <div className="space-y-2.5">
          {proofRows.map((row) => (
            <div key={row.label} className="grid gap-1 rounded-2xl border border-white/15 bg-white/5 px-4 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] md:grid-cols-[0.9fr_1.1fr]">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">{row.label}</span>
              <span className="text-sm font-semibold text-slate-100">{row.value}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
    </div>
  )
}

