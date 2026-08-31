import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlowPanelProps {
  children: ReactNode
  className?: string
}

export default function GlowPanel({ children, className }: GlowPanelProps) {
  return <div className={cn("studio-panel rounded-[1.5rem] glow-outline", className)}>{children}</div>
}
