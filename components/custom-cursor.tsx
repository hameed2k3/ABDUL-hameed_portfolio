"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useAnimationFrame } from "@/hooks/use-animation-frame"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useAnimationFrame(() => {
    // Smooth follow effect
    const x = cursorPosition.x + (mousePosition.x - cursorPosition.x) * 0.1
    const y = cursorPosition.y + (mousePosition.y - cursorPosition.y) * 0.1

    if (Math.abs(mousePosition.x - cursorPosition.x) > 0.1 || Math.abs(mousePosition.y - cursorPosition.y) > 0.1) {
      setCursorPosition({ x, y })
    }
  }, [mousePosition, cursorPosition])

  // Only show on desktop
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  if (isMobile) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-purple-600 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: cursorPosition.x - 16,
          y: cursorPosition.y - 16,
        }}
        transition={{ duration: 0, ease: "linear" }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ duration: 0, ease: "linear" }}
      />
    </>
  )
}
