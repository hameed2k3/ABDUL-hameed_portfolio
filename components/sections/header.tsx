"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Stack", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-6">
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 md:px-6",
          isScrolled
            ? "border-white/20 bg-slate-950/75 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(34,211,238,0.12)]"
            : "border-white/15 bg-slate-950/40 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]",
        )}
      >
        <Link href="#home" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/40 bg-gradient-to-br from-cyan-400/20 to-sky-500/10 font-[var(--font-display)] text-sm font-bold text-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-300/60 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]">
            AH
          </span>
          <div>
            <p className="font-[var(--font-display)] text-sm font-semibold tracking-[0.2em] text-white">ABDUL HAMEED</p>
            <p className="text-xs text-slate-400">Software Development Engineer</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1.5 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-md transition-all duration-300 hover:border hover:border-white/20 hover:bg-white/10 hover:text-white hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_0_15px_rgba(255,255,255,0.1)]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="glass-button-primary">
            <Link href="#contact">Start a Project</Link>
          </Button>
        </div>

        <Button variant="ghost" size="icon" className="text-white md:hidden" onClick={() => setMenuOpen((v) => !v)}>
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {menuOpen && (
        <div className="mx-auto mt-3 max-w-7xl rounded-[1.8rem] border border-white/20 bg-slate-950/90 p-5 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_25px_60px_rgba(0,0,0,0.6)] md:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-2xl border border-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-white/15 hover:bg-white/10 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="glass-button-primary mt-2 w-full text-center">
              <Link href="#contact" onClick={() => setMenuOpen(false)}>
                Start a Project
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

