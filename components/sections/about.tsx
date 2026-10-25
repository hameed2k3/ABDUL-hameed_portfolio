"use client"

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import SectionReveal from "@/components/common/section-reveal"
import { CodeWindow, CornerFrame } from "@/components/common/code-window"

const facts = [
  { key: "based_in", value: "Chennai, India" },
  { key: "experience", value: "1+ years" },
  { key: "education", value: "CGPA 8.4 / 10" },
  { key: "currently", value: "Enarxi Innovation", highlight: true },
]

export default function About() {
  return (
    <section id="about" className="border-t border-border py-20 md:py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionReveal>
            <p className="eyebrow">04 about</p>
            <h2 className="section-title mt-3">
              Backend-leaning, full-stack in practice<span className="text-primary">.</span>
            </h2>
            <CornerFrame className="mt-8 max-w-xs">
              <Image
                src="/abdul-hameed-profile.jpg"
                alt="Portrait of Abdul Hameed"
                width={480}
                height={600}
                className="aspect-[4/5] w-full rounded object-cover"
              />
              <p className="mt-2 font-mono text-[11px] text-muted-foreground">abdul-hameed.jpg · Chennai, IN</p>
            </CornerFrame>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <CodeWindow title="README.md">
              <div className="p-5 md:p-6">
                <p className="font-mono text-base text-primary"># Abdul Hameed</p>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <p>
                    I&apos;m a Software Development Engineer at Enarxi Innovation Private Limited. Since January 2026
                    I&apos;ve been building NestJS, PostgreSQL, and React applications, and deploying them to DigitalOcean
                    servers with PM2 and Nginx.
                  </p>
                  <p>
                    Before that I built booking APIs and Amadeus SOAP integrations at Goeasytrip. My final-year
                    research on an AI-integrated voting system was published in the International Journal of Research
                    Publication and Review.
                  </p>
                </div>
                <p className="mt-6 font-mono text-sm text-foreground">## facts</p>
                <dl className="mt-2">
                  {facts.map((fact) => (
                    <div key={fact.key} className="flex justify-between gap-4 border-b border-border py-2.5 last:border-b-0">
                      <dt className="font-mono text-xs text-muted-foreground">{fact.key}</dt>
                      <dd className={`text-sm ${fact.highlight ? "text-primary" : ""}`}>{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </CodeWindow>
            <a
              href="https://www.linkedin.com/in/abdul-hameed-abdul-lathif-567064250/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1 font-mono text-sm text-primary hover:underline"
            >
              connect on linkedin <ArrowUpRight className="h-4 w-4" />
            </a>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
