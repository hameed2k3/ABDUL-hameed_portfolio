import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm">
      <div className="container px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-orange-400 bg-clip-text text-transparent"
            >
              Abdul<span className="text-primary">Hameed</span>
            </Link>
            <p className="mt-2 text-muted-foreground">
              Backend Developer specializing in building robust and scalable server-side applications.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </Link>
              <Link href="#resume" className="text-muted-foreground hover:text-foreground transition-colors">
                Resume
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/hameed2k3"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background hover:bg-muted transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/abdul-hameed-abdul-lathif-567064250/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background hover:bg-muted transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://x.com/ABDULHAMEED1324"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background hover:bg-muted transition-colors"
                aria-label="Twitter/X"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:adhameed2k3@gmail.com"
                className="p-2 rounded-full bg-background hover:bg-muted transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Abdul Hameed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
