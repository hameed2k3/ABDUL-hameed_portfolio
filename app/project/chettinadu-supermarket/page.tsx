import Image from "next/image"
import Link from "next/link"
import { CornerFrame } from "@/components/common/code-window"
import Footer from "@/components/sections/footer"

const highlights = [
  "Curated product catalogue pages built for retail storytelling rather than checkout complexity.",
  "Marketing-friendly content sections that can be updated quickly without engineering overhead.",
  "Responsive layouts designed for store promotions, category highlights, and brand positioning.",
]

const deliverables = ["WordPress", "Elementor Pro", "Custom CSS", "Responsive layouts", "Content strategy", "SEO foundations"]

const meta = [
  { key: "client", value: "Dubai-based supermarket" },
  { key: "role", value: "Web development intern" },
  { key: "type", value: "Marketing website" },
]

export default function ChettinaduSupermarketProject() {
  return (
    <>
      <main className="min-h-screen py-14 md:py-20">
        <div className="container max-w-3xl">
          <Link href="/#projects" className="font-mono text-sm text-muted-foreground hover:text-primary">
            &larr; cd ../projects
          </Link>

          <p className="eyebrow mt-10">marketing showcase</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-6xl">
            Chettinadu Supermarket<span className="text-primary">.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            A product display website created during my internship to present a supermarket brand through curated
            category storytelling, promotional sections, and flexible marketing content.
          </p>

          <dl className="mt-10 grid border-y border-border sm:grid-cols-3">
            {meta.map((item, index) => (
              <div key={item.key} className={`py-4 sm:px-4 ${index === 0 ? "sm:pl-0" : "sm:border-l sm:border-border"}`}>
                <dt className="font-mono text-[11px] uppercase text-muted-foreground">{item.key}</dt>
                <dd className="mt-1 text-sm font-medium">{item.value}</dd>
              </div>
            ))}
          </dl>

          <CornerFrame className="mt-10">
            <Image
              src="/project-supermarket-cover.png"
              alt="Chettinadu Supermarket website preview"
              width={1200}
              height={800}
              className="aspect-[3/2] w-full rounded object-cover"
            />
          </CornerFrame>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold">Purpose and scope</h2>
            <p className="mt-3 text-muted-foreground">
              The project focused on presenting in-store offerings, promotions, and brand identity through a clear
              showcase experience, built to support merchandising and brand tone rather than direct ecommerce.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold">Highlights</h2>
            <ul className="mt-4 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="relative pl-5 text-muted-foreground">
                  <span aria-hidden="true" className="absolute left-0 font-mono text-primary">
                    +
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold">Toolkit</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {deliverables.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
