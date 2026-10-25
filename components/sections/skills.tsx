"use client"

import SectionReveal from "@/components/common/section-reveal"
import { CodeWindow } from "@/components/common/code-window"

const groups = [
  { key: "languages", items: ["Java", "JavaScript", "TypeScript", "Python", "SQL"] },
  { key: "backend", items: ["Spring Boot", "NestJS", "Node.js", "Express.js", "REST APIs", "SOAP", "JWT", "OAuth 2.0"] },
  { key: "frontend", items: ["React.js", "Next.js", "Electron", "Framer Motion", "HTML", "CSS", "WordPress"] },
  { key: "databases", items: ["PostgreSQL", "MongoDB", "SQLite"] },
  { key: "deployment", items: ["DigitalOcean (VPS)", "Nginx", "PM2", "Certbot (SSL)", "Vercel", "Render", "IONOS"] },
  { key: "tools", items: ["Git", "GitHub", "Maven", "Postman"] },
]

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border py-20 md:py-28">
      <div className="container">
        <SectionReveal className="mb-12 max-w-2xl">
          <p className="eyebrow">02 stack</p>
          <h2 className="section-title mt-3">
            What I work with<span className="text-primary">.</span>
          </h2>
        </SectionReveal>

        <SectionReveal>
          <CodeWindow title="~/abdul — zsh">
            <p className="px-5 pt-5 font-mono text-sm text-muted-foreground">
              <span className="text-primary">$</span> cat stack.json
            </p>
            <dl className="mt-2">
              {groups.map((group) => (
                <div
                  key={group.key}
                  className="grid gap-3 border-b border-border px-5 py-4 last:border-b-0 md:grid-cols-[160px_1fr] md:items-center"
                >
                  <dt className="font-mono text-sm text-primary">&quot;{group.key}&quot;</dt>
                  <dd className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="px-5 pb-5 pt-1 font-mono text-sm text-muted-foreground">
              <span className="text-primary">$</span>
              <span className="caret" aria-hidden="true" />
            </p>
          </CodeWindow>
        </SectionReveal>
      </div>
    </section>
  )
}
