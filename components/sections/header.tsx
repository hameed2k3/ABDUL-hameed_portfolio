"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/providers/theme-toggle"

const navItems = [
  { name: "work", href: "/#projects" },
  { name: "stack", href: "/#skills" },
  { name: "deploy", href: "/#deployment" },
  { name: "about", href: "/#about" },
  { name: "experience", href: "/#resume" },
  { name: "contact", href: "/#contact" },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/#home" className="font-mono text-sm font-medium">
          ~/abdul<span className="caret" aria-hidden="true" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden border-primary font-mono text-xs text-primary hover:bg-primary hover:text-primary-foreground md:inline-flex"
          >
            <Link href="/#contact">hire me ↗</Link>
          </Button>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {menuOpen && (
        <nav aria-label="Mobile" className="container border-t border-border pb-4 md:hidden">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex gap-3 border-b border-border py-3 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="text-xs text-primary">0{index + 1}</span>
              {item.name}
            </Link>
          ))}
          <Button asChild className="mt-4 w-full font-mono">
            <Link href="/#contact" onClick={() => setMenuOpen(false)}>
              hire me ↗
            </Link>
          </Button>
        </nav>
      )}
    </header>
  )
}
