"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, reducedMotion ? 450 : 1050)

    return () => clearTimeout(timer)
  }, [reducedMotion])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#070c16]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative flex flex-col items-center"
          >
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/5">
              <motion.div
                className="absolute inset-0 rounded-full border border-cyan-300/25"
                animate={{ rotate: 360 }}
                transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-3 rounded-full border border-orange-300/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 3.1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <span className="font-[var(--font-display)] text-xl font-bold tracking-[0.2em] text-white">AH</span>
              <motion.div
                className="absolute left-2 right-2 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent"
                animate={{ opacity: [0.15, 0.9, 0.15], y: [-14, 14, -14] }}
                transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
            </div>
            <p className="mt-5 text-xs uppercase tracking-[0.45em] text-slate-400">Studio Loading</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
