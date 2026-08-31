"use client"

import type { ReactNode } from "react"
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

interface TiltCardProps {
  children: ReactNode
  className?: string
}

export default function TiltCard({ children, className }: TiltCardProps) {
  const rotateX = useSpring(useMotionValue(0), { stiffness: 160, damping: 18, mass: 0.35 })
  const rotateY = useSpring(useMotionValue(0), { stiffness: 160, damping: 18, mass: 0.35 })
  const glowX = useMotionValue(50)
  const glowY = useMotionValue(50)

  const transform = useMotionTemplate`perspective(1600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  const background = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(103, 232, 249, 0.18), transparent 36%)`

  return (
    <motion.div
      className={cn("relative h-full transform-gpu", className)}
      style={{ transformStyle: "preserve-3d", transform }}
      whileHover={{ y: -6 }}
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect()
        const px = (event.clientX - bounds.left) / bounds.width
        const py = (event.clientY - bounds.top) / bounds.height

        rotateX.set((0.5 - py) * 10)
        rotateY.set((px - 0.5) * 14)
        glowX.set(px * 100)
        glowY.set(py * 100)
      }}
      onMouseLeave={() => {
        rotateX.set(0)
        rotateY.set(0)
        glowX.set(50)
        glowY.set(50)
      }}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[1.5rem]"
        style={{ background }}
      />
      {children}
    </motion.div>
  )
}
