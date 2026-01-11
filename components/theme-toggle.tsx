"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Determine if we're in dark mode
  const isDark = mounted && resolvedTheme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return <div className="h-8 w-16 rounded-full bg-gray-300 animate-pulse"></div>
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="relative h-8 w-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 p-1 shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <div className="absolute inset-0 rounded-full opacity-20 dark:opacity-40 bg-black dark:bg-transparent"></div>
      <motion.div
        className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md"
        initial={false}
        animate={{
          x: isDark ? "calc(100% - 0.25rem)" : "0%",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {isDark ? <Moon className="h-4 w-4 text-blue-700" /> : <Sun className="h-4 w-4 text-yellow-500" />}
      </motion.div>
      <span className="sr-only">{isDark ? "Switch to light mode" : "Switch to dark mode"}</span>
    </motion.button>
  )
}
