import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-white/15 bg-slate-950/70 backdrop-blur-2xl py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-[var(--font-display)] text-2xl font-semibold text-white">Abdul Hameed</p>
            <p className="mt-2 max-w-md text-sm leading-7 text-slate-400">
              Software Development Engineer focused on frontend quality, scalable systems, and modern interactive web
              experiences.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="https://github.com/hameed2k3"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pill p-3 text-slate-300 hover:text-white"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/abdul-hameed-abdul-lathif-567064250/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pill p-3 text-slate-300 hover:text-white"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:abdulhameedabdullathif@gmail.com"
              className="glass-pill p-3 text-slate-300 hover:text-white"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Abdul Hameed. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="#home" className="transition-colors hover:text-cyan-300">
              Home
            </Link>
            <Link href="#projects" className="transition-colors hover:text-cyan-300">
              Projects
            </Link>
            <Link href="#contact" className="transition-colors hover:text-cyan-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

