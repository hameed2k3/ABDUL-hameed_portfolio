"use client"

import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SectionReveal from "@/components/common/section-reveal"
import { CodeWindow } from "@/components/common/code-window"

const stack = ["React", "Next.js", "NestJS", "MongoDB", "PostgreSQL", "Spring Boot", "Framer Motion"]

const stats = [
  { value: "1+ yrs", label: "experience" },
  { value: "3 roles", label: "intern to engineer" },
  { value: "8.4 / 10", label: "cgpa" },
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div aria-hidden="true" className="grid-bg absolute inset-0" />
      <div className="container relative pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionReveal>
            <p className="inline-flex items-center gap-2 rounded border border-border bg-card px-2.5 py-1 font-mono text-xs text-muted-foreground">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
              building at Enarxi Innovation
            </p>
            <p className="mt-8 font-mono text-xs text-muted-foreground">$ whoami</p>
            <h1 className="mt-2 text-6xl font-semibold leading-[0.98] md:text-8xl">
              Abdul
              <br />
              Hameed<span className="text-primary">.</span>
            </h1>
            <p className="mt-5 font-mono text-base text-primary md:text-lg">
              Software Development Engineer
              <span className="caret" aria-hidden="true" />
            </p>
            <p className="mt-5 max-w-md text-muted-foreground">
              I build and ship web products end to end: REST APIs in Spring Boot and NestJS, PostgreSQL databases, React
              interfaces, and deployment with PM2 and nginx.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="font-mono text-sm">
                <Link href="#projects">
                  view projects <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-foreground font-mono text-sm">
                <Link href="#contact">./contact</Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="font-mono text-sm">
                <a href="/asset/Abdul-Hameed-Resume.pdf" download="Abdul-Hameed-Resume.pdf">
                  <Download /> resume.pdf
                </a>
              </Button>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <CodeWindow title="abdul.ts">
              <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7">
                <span className="text-muted-foreground">{"// who I am, in code"}</span>
                {"\n"}
                <span className="text-primary">const</span> abdul = {"{"}
                {"\n  "}role: <span>&quot;Software Engineer&quot;</span>,
                {"\n  "}company: <span>&quot;Enarxi&quot;</span>,
                {"\n  "}based: <span>&quot;Chennai, IN&quot;</span>,
                {"\n  "}stack: [<span>&quot;React&quot;</span>, <span>&quot;Next.js&quot;</span>,
                {"\n    "}
                <span>&quot;NestJS&quot;</span>, <span>&quot;PostgreSQL&quot;</span>],
                {"\n  "}focus: <span>&quot;production apps&quot;</span>,
                {"\n  "}
                <span className="text-primary">open</span>: <span className="text-primary">true</span>,
                {"\n}"}
              </pre>
            </CodeWindow>
          </SectionReveal>
        </div>

        <SectionReveal delay={0.15} className="mt-14">
          <dl className="grid grid-cols-3 border-y border-border">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`py-4 ${index > 0 ? "border-l border-border pl-4 md:pl-6" : ""}`}>
                <dd className="font-display text-xl font-semibold md:text-3xl">{stat.value}</dd>
                <dt className="font-mono text-[11px] text-muted-foreground">{stat.label}</dt>
              </div>
            ))}
          </dl>
          <ul className="mt-5 flex flex-wrap gap-2">
            {stack.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
        </SectionReveal>
      </div>
    </section>
  )
}
