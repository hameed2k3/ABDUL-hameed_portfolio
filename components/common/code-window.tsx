import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface CodeWindowProps {
  title: string
  children: ReactNode
  className?: string
}

/** A framed "editor/terminal" panel with a title bar. */
export function CodeWindow({ title, children, className }: CodeWindowProps) {
  return (
    <div className={cn("overflow-hidden rounded-lg border border-border bg-card", className)}>
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-border" />
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-border" />
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-border" />
        <span className="ml-2 font-mono text-[11px] text-muted-foreground">{title}</span>
      </div>
      {children}
    </div>
  )
}

/** Border with accent corner brackets, for featured images and photos. */
export function CornerFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("relative rounded-lg border border-border p-2", className)}>
      <span aria-hidden="true" className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-primary" />
      <span aria-hidden="true" className="absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-primary" />
      {children}
    </div>
  )
}
