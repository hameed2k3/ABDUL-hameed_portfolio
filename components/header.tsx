"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import ThemeToggle from "./theme-toggle"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },

  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-5",
      )}
    >
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600"
        style={{ width: `${scrollProgress}%` }}
      ></div>
      <div className="container flex items-center justify-between">
        {/* Mobile Menu Button - Now on the left */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>

        {/* Logo with Profile Photo */}
        <Link href="#home" className="flex items-center space-x-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-transparent">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 p-0.5 rounded-full">
              <div className="w-full h-full rounded-full overflow-hidden bg-background">
                <Image
                  src="/abdul-hameed-profile.jpg"
                  alt="Abdul Hameed"
                  fill
                  className="object-cover object-center"
                  sizes="40px"
                />
              </div>
            </div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-orange-400 bg-clip-text text-transparent">
            Abdul<span className="text-primary">Hameed</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <nav className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle */}
          <ThemeToggle />

          <Button className="ml-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            <Link href="#contact">Hire Me</Link>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg py-4 border-b border-border">
          <div className="container flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center justify-between px-4 py-3 mt-2 border-t border-border">
              <div className="flex items-center">
                <span className="mr-3 text-sm font-medium">Theme:</span>
                <ThemeToggle />
              </div>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  Hire Me
                </Link>
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
