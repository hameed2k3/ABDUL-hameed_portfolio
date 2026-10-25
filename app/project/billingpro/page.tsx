import Link from "next/link"
import { CodeWindow, CornerFrame } from "@/components/common/code-window"
import { InvoicePreview } from "@/components/common/invoice-preview"
import Footer from "@/components/sections/footer"

const meta = [
  { key: "type", value: "Desktop app (Windows)" },
  { key: "built for", value: "Indian retail" },
  { key: "status", value: "Packaged for user testing" },
]

const sections = [
  {
    title: "Billing",
    points: [
      "A dedicated billing screen for billers: scan a barcode or search products by name or SKU, and the bill builds line by line.",
      "GST is calculated per line from the product's category. Intra-state bills split into CGST and SGST; inter-state bills use IGST.",
      "Supports discounts, payment mode, and walk-in or named customers, with invoice numbers that increment automatically.",
      "Detects whether a printer is connected before printing, and still saves the bill if there isn't one.",
      "Billing history can be searched by invoice number, date range, or biller.",
    ],
  },
  {
    title: "Inventory",
    points: [
      "Products carry a SKU, category, unit, purchase price, sale price, stock quantity, and a low-stock threshold.",
      "Opening stock is written to a stock log, and every sale deducts stock and records an \"out\" entry tied to the invoice.",
      "The dashboard shows total stock value (quantity times purchase price) and a count of items at or below their alert level.",
      "Categories hold the GST rate, so tax stays consistent across products.",
    ],
  },
  {
    title: "Reports and access",
    points: [
      "Monthly sales and a GST report broken down by category, with CGST, SGST, and IGST totals. Reports export to PDF.",
      "Two roles: admins manage products, categories, users, settings, and reports; billers only create and view their own bills.",
      "A first-run setup creates the admin account on a fresh database, and passwords are hashed with bcrypt.",
    ],
  },
]

const stack = ["Electron", "React", "TypeScript", "Vite", "Tailwind CSS", "SQLite (sql.js)", "jsPDF", "bcrypt"]

const lessons = [
  "Month-end reports were dropping the last day of each month. Fixing the date boundaries in the SQL query made the monthly sales and GST figures match.",
  "The PDF library's built-in fonts garbled the rupee symbol, so exports use \"Rs.\" to stay readable.",
]

export default function BillingProProject() {
  return (
    <>
      <main className="min-h-screen py-14 md:py-20">
        <div className="container max-w-3xl">
          <Link href="/#projects" className="font-mono text-sm text-muted-foreground hover:text-primary">
            &larr; cd ../projects
          </Link>

          <p className="eyebrow mt-10">desktop app</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-6xl">
            BillingPro<span className="text-primary">.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            GST-compliant desktop billing software for Indian retail. It manages the billing counter and the inventory in
            one place, so every bill updates stock and every stock movement is traceable.
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
            <CodeWindow title="how a bill flows">
              <div className="grid md:grid-cols-[1fr_1.1fr]">
                <ol className="space-y-4 border-b border-border p-5 font-mono text-xs md:border-b-0 md:border-r">
                  {[
                    "scan or search a product",
                    "GST added per line from its category",
                    "CGST + SGST, or IGST if inter-state",
                    "invoice saved, number incremented",
                    "stock deducted, \"out\" logged",
                    "print or find it later in history",
                  ].map((step, index) => (
                    <li key={step} className="flex gap-3">
                      <span className="text-primary">0{index + 1}</span>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
                <InvoicePreview />
              </div>
            </CodeWindow>
          </CornerFrame>

          {sections.map((section) => (
            <section key={section.title} className="mt-12">
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              <ul className="mt-4 space-y-3">
                {section.points.map((point) => (
                  <li key={point} className="relative pl-5 text-muted-foreground">
                    <span aria-hidden="true" className="absolute left-0 font-mono text-primary">
                      +
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section className="mt-12">
            <h2 className="text-2xl font-semibold">Problems I solved</h2>
            <ul className="mt-4 space-y-3">
              {lessons.map((item) => (
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
            <h2 className="text-2xl font-semibold">Stack</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {stack.map((item) => (
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
