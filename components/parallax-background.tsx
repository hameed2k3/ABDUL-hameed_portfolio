"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxBackgroundProps {
  imageUrl: string
  opacity?: number
  speed?: number
}

export default function ParallaxBackground({ imageUrl, opacity = 0.2, speed = 0.5 }: ParallaxBackgroundProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <div ref={ref} className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          y,
          scale,
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/40"></div>
    </div>
  )
}
