"use client"

import type { ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { revealSoft, revealUp, sectionTransition } from "@/lib/motion"

interface SectionRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function SectionReveal({ children, className, delay = 0 }: SectionRevealProps) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      variants={reducedMotion ? revealSoft : revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={sectionTransition(delay)}
      className={className}
    >
      {children}
    </motion.div>
  )
}
