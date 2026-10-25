"use client"

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SectionReveal from "@/components/common/section-reveal"
import { CornerFrame } from "@/components/common/code-window"
import { InvoicePreview } from "@/components/common/invoice-preview"

const featured = {
  title: "BillingPro: GST billing and inventory software",
  description:
    "A desktop app for Indian retail that handles the billing counter and the stock room together. Every bill calculates GST, deducts stock, and logs the movement, so the numbers always agree.",
  tags: ["Electron", "React", "TypeScript", "SQLite"],
  href: "/project/billingpro",
  host: "BillingPro - new bill",
}

const projects = [
  {
    path: "voting-system/",
    title: "AI Integrated Online Voting System",
    description: "Face recognition, OTP, and voter ID checks with votes stored on a blockchain. Published as a research paper in IJRPR.",
    image: "/project-voting-cover.png",
    tags: ["React.js", "Security", "Blockchain"],
    href: "https://votingsystemonline.vercel.app/",
    label: "live demo",
  },
  {
    path: "grocery-marketplace/",
    title: "Multi-Vendor Grocery Marketplace",
    description: "Several stores sell on one platform, each with its own catalog, stock, and orders. Google OAuth and JWT login with separate access for customers, vendors, and admins.",
    image: "/project-grocery-cover.png",
    tags: ["React.js", "Node.js", "MongoDB", "OAuth 2.0"],
    href: "https://grocery-web-naanmuthalvan.vercel.app/",
    label: "live demo",
  },
  {
    path: "chettinadu-site/",
    title: "Chettinadu Supermarket",
    description: "A marketing website for a supermarket brand, covering promotions and a curated catalogue. Built during my internship.",
    image: "/project-supermarket-cover.png",
    tags: ["WordPress", "Elementor"],
    href: "/project/chettinadu-supermarket",
    label: "case study",
  },
  {
    path: "Bankingconsole/",
    title: "Simple Banking System",
    description: "A console banking application in Java, focused on OOP principles, account operations, and structured logic.",
    image: "/project-banking-cover.png",
    tags: ["Java", "OOP"],
    href: "https://github.com/hameed2k3/Bankingconsole",
    label: "view source",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border py-20 md:py-28">
      <div className="container">
        <SectionReveal className="mb-12 max-w-2xl">
          <p className="eyebrow">01 selected work</p>
          <h2 className="section-title mt-3">
            Things I&apos;ve built<span className="text-primary">.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Production-minded apps, hackathon builds, and client work.</p>
        </SectionReveal>

        <SectionReveal>
          <Link href={featured.href} className="group block">
            <CornerFrame className="grid gap-6 p-4 md:grid-cols-[1.15fr_0.85fr] md:gap-8 md:p-5">
              <div className="overflow-hidden rounded-md border border-border bg-card">
                <div className="border-b border-border px-3 py-2 font-mono text-[11px] text-muted-foreground">
                  {featured.host}
                </div>
                <InvoicePreview />
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-mono text-xs text-primary">★ featured · desktop app</p>
                <h3 className="mt-2 text-2xl font-semibold leading-tight md:text-3xl">{featured.title}</h3>
                <p className="mt-3 text-muted-foreground">{featured.description}</p>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                  {featured.tags.map((tag) => (
                    <li key={tag} className="tech-tag">
                      {tag}
                    </li>
                  ))}
                </ul>
                <span className="mt-5 inline-flex items-center gap-1 font-mono text-sm text-primary group-hover:underline">
                  read case study <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </CornerFrame>
          </Link>
        </SectionReveal>

        <ul className="mt-6 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const external = project.href.startsWith("http")
            return (
              <li key={project.title}>
                <SectionReveal delay={index * 0.06} className="h-full">
                  <Link
                    href={project.href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary"
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      width={600}
                      height={400}
                      className="aspect-[3/2] w-full border-b border-border object-cover"
                    />
                    <div className="flex flex-1 flex-col p-5">
                      <p className="font-mono text-[11px] text-muted-foreground">{project.path}</p>
                      <h3 className="mt-1 text-lg font-semibold">{project.title}</h3>
                      <p className="mt-2 flex-1 text-sm text-muted-foreground">{project.description}</p>
                      <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
                        {project.tags.map((tag) => (
                          <li key={tag} className="tech-tag">
                            {tag}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-primary group-hover:underline">
                        {project.label} <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                </SectionReveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
