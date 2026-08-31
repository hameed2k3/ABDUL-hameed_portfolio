"use client"

import Link from "next/link"
import { ArrowLeft, CheckCircle2, Globe, LayoutGrid, Megaphone, Palette } from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const highlights = [
  "Curated product catalogue pages built for retail storytelling rather than checkout complexity.",
  "Marketing-friendly content sections that can be updated quickly without engineering overhead.",
  "Responsive layouts designed for store promotions, category highlights, and brand positioning.",
]

const deliverables = [
  "WordPress",
  "Elementor Pro",
  "Custom CSS",
  "Responsive Layouts",
  "Content Strategy",
  "SEO Foundations",
]

export default function ChettinaduSupermarketProject() {
  return (
    <div className="min-h-screen bg-background pt-28 text-foreground">
      <div className="container px-4 md:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Button variant="outline" asChild className="rounded-full bg-transparent">
            <Link href="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <Badge className="rounded-full border border-orange-300/20 bg-orange-300/10 px-4 py-1 text-orange-200">
            Marketing Showcase
          </Badge>
          <h1 className="mt-5 font-[var(--font-display)] text-4xl font-semibold md:text-6xl">
            Chettinadu Supermarket
          </h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            A product display website created during my internship to present a supermarket brand through curated
            category storytelling, promotional sections, and flexible marketing content.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Card className="studio-frame overflow-hidden border-white/10 bg-slate-950/70">
              <div className="relative h-72 bg-[linear-gradient(135deg,rgba(22,101,52,0.9),rgba(16,185,129,0.65)),radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_28%)]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-3 rounded-[1.75rem] border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
                    {[1, 2, 3, 4].map((tile) => (
                      <div key={tile} className="h-16 w-16 rounded-2xl border border-white/20 bg-white/10" />
                    ))}
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <Palette className="mb-3 h-5 w-5 text-orange-200" />
                    <h2 className="font-[var(--font-display)] text-xl font-semibold">Brand-led design</h2>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      Built to support merchandising, brand tone, and category storytelling rather than direct ecommerce.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <Globe className="mb-3 h-5 w-5 text-cyan-200" />
                    <h2 className="font-[var(--font-display)] text-xl font-semibold">Responsive delivery</h2>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      Structured for desktop and mobile browsing with campaign-ready sections and easy content updates.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="space-y-6"
          >
            <Card className="studio-panel border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Megaphone className="h-5 w-5 text-orange-200" />
                  Purpose and Scope
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-7 text-muted-foreground">
                This project focused on presenting in-store offerings, promotions, and brand identity through a clear
                showcase experience for a Dubai-based supermarket client.
              </CardContent>
            </Card>

            <Card className="studio-panel border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LayoutGrid className="h-5 w-5 text-cyan-200" />
                  Highlights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {highlights.map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-7 text-muted-foreground">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-emerald-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-10"
        >
          <Card className="studio-panel border-white/10 bg-white/5">
            <CardHeader>
              <CardTitle>Toolkit and Deliverables</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {deliverables.map((item) => (
                  <Badge key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200">
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
