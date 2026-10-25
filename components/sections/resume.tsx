"use client"

import { Download } from "lucide-react"
import SectionReveal from "@/components/common/section-reveal"
import { Button } from "@/components/ui/button"

const experience = [
  {
    hash: "a4f2e91",
    ref: "HEAD → main",
    company: "Enarxi Innovation Private Limited",
    role: "Software Development Engineer",
    period: "Jan 2026 - present",
    bullets: [
      "Build and maintain web applications with NestJS, PostgreSQL, and React, across both the API and the user interface.",
      "Design REST endpoints and database tables for new features, and fix bugs raised by teammates and users.",
      "Deploy releases to DigitalOcean VPS servers and use PM2 to run and restart multiple backend services.",
      "Configure Nginx as a reverse proxy to route traffic to each service, and set up SSL certificates with Certbot.",
    ],
  },
  {
    hash: "7c1b0d3",
    company: "Goeasytrip",
    location: "Remote, Singapore",
    role: "Junior Software Developer",
    period: "Aug 2025 - Dec 2025",
    bullets: [
      "Built Spring Boot REST APIs for user accounts, bookings, and other core flows of a travel booking platform.",
      "Integrated Amadeus SOAP APIs for flight search, pricing, and availability, handling the XML request and response flow.",
      "Tested APIs in Postman, reproduced reported bugs, and shipped fixes with regression checks.",
      "Deployed the application on IONOS, set up domain routing and environment configs, and handled routine maintenance.",
    ],
  },
  {
    hash: "1e9d4a8",
    company: "Growth Spell Software Solution",
    location: "Remote, Dubai, UAE",
    role: "Web Development Intern",
    period: "Apr 2025 - Jun 2025",
    bullets: [
      "Customized and maintained WordPress sites with themes, plugins, and Elementor.",
      "Fixed layout, plugin, and speed issues with JavaScript and CSS updates.",
    ],
  },
]

export default function Resume() {
  return (
    <section id="resume" className="border-t border-border py-20 md:py-28">
      <div className="container">
        <SectionReveal className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">05 experience</p>
            <h2 className="section-title mt-3">
              Where I&apos;ve worked<span className="text-primary">.</span>
            </h2>
          </div>
          <Button asChild variant="outline" className="border-foreground font-mono text-sm">
            <a href="/asset/Abdul-Hameed-Resume.pdf" download="Abdul-Hameed-Resume.pdf">
              <Download /> resume.pdf
            </a>
          </Button>
        </SectionReveal>

        <p className="mb-6 font-mono text-sm text-muted-foreground">
          <span className="text-primary">$</span> git log --career
        </p>

        <ol className="max-w-3xl">
          {experience.map((job, index) => {
            const isCurrent = index === 0
            const isLast = index === experience.length - 1
            return (
              <li key={job.hash} className="relative grid grid-cols-[1.5rem_1fr] gap-4">
                <div aria-hidden="true" className="relative">
                  {!isLast && <span className="absolute bottom-[-1.5rem] left-[0.4rem] top-5 w-px bg-border" />}
                  <span
                    className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 ${
                      isCurrent ? "border-primary bg-primary" : "border-border bg-background"
                    }`}
                  />
                </div>
                <SectionReveal delay={index * 0.06}>
                  <article
                    className={`mb-6 rounded-lg border bg-card p-5 ${isCurrent ? "border-primary" : "border-border"}`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px]">
                      <span className="text-muted-foreground">
                        commit {job.hash}
                        {job.ref && <span className="text-primary"> ({job.ref})</span>}
                      </span>
                      <span className="text-muted-foreground">{job.period}</span>
                    </div>
                    <h3 className="mt-3 text-xl font-semibold">{job.role}</h3>
                    <p className={isCurrent ? "text-primary" : "text-muted-foreground"}>
                      {job.company}
                      {job.location && <span className="text-muted-foreground"> &middot; {job.location}</span>}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {job.bullets.map((bullet) => (
                        <li key={bullet} className="relative pl-5 text-sm text-muted-foreground">
                          <span aria-hidden="true" className="absolute left-0 font-mono text-primary">
                            +
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </article>
                </SectionReveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
