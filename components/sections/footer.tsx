import Link from "next/link"

const socials = [
  { label: "github", href: "https://github.com/hameed2k3", external: true },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/abdul-hameed-abdul-lathif-567064250/",
    external: true,
  },
  { label: "email", href: "mailto:abdulhameedabdullathif@gmail.com", external: false },
]

export default function Footer() {
  return (
    <footer className="border-t border-border py-6">
      <div className="container flex flex-col gap-4 font-mono text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>&copy; {new Date().getFullYear()} abdul hameed &middot; built with next.js</p>
        <ul className="flex items-center gap-5">
          {socials.map(({ label, href, external }) => (
            <li key={label}>
              <Link
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="transition-colors hover:text-primary"
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/#home" className="text-primary hover:underline">
              &uarr; top
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
