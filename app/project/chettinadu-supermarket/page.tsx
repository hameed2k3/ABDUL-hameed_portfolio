"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Palette, Users, Code, Globe, CheckCircle, Sparkles, Megaphone } from "lucide-react"
import Link from "next/link"

export default function ChettinauduSupermarketProject() {
  const highlights = [
    "Curated product catalogue pages that spotlight key grocery categories with seasonal emphasis.",
    "Story-driven sections to communicate brand heritage, store experience, and community values.",
    "Reusable Elementor blocks that empower the marketing team to launch new campaigns quickly.",
    "Localized contact panels guiding visitors to WhatsApp, phone, and in-store visits.",
  ]

  const capabilities = [
    "WordPress",
    "Elementor Pro",
    "Custom CSS",
    "JavaScript Enhancements",
    "Responsive Layouts",
    "Content Strategy",
    "Performance Optimization",
    "SEO Foundations",
  ]

  const featureTiles = [
    {
      title: "Homepage Experience",
      subtitle: "Immersive hero, product highlights, and trust messaging",
      gradient: "from-green-500 to-emerald-700",
      icon: <Globe className="h-16 w-16 text-white opacity-80" />,
    },
    {
      title: "Category Spotlights",
      subtitle: "Masonry layouts for fresh produce, bakery, and pantry lines",
      gradient: "from-blue-500 to-cyan-600",
      icon: (
        <div className="grid grid-cols-2 gap-2 p-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-12 h-12 bg-white/20 rounded border-2 border-white/40"></div>
          ))}
        </div>
      ),
    },
    {
      title: "Mobile Content Blocks",
      subtitle: "Swipe-friendly sections for promotions and store updates",
      gradient: "from-purple-500 to-pink-600",
      icon: (
        <div className="w-16 h-24 bg-white/20 rounded-lg border-2 border-white/40 flex flex-col">
          <div className="h-4 bg-white/30 m-1 rounded"></div>
          <div className="flex-1 m-1 bg-white/20 rounded"></div>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90 pt-20">
      <div className="container px-4 md:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button variant="outline" asChild className="bg-transparent">
            <Link href="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Palette className="h-8 w-8 text-orange-500 mr-3" />
            <Badge variant="outline" className="bg-orange-500/10 text-orange-600 border-orange-500/20">
              Marketing Showcase
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Chettinadu Supermarket
            <span className="block text-2xl md:text-3xl bg-gradient-to-r from-green-500 to-emerald-700 bg-clip-text text-transparent mt-2">
              Product Display Website
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A product-focused web presence crafted during my internship at Growth Spell Software Solution for a
            Dubai-based supermarket. The build elevates in-store offerings through storytelling, curated catalogues, and
            promotion-ready content blocks—without adding online checkout or cart flows.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="border-orange-500/20 bg-orange-500/5">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Megaphone className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-orange-600">Purpose & Scope</h3>
                  <p className="text-muted-foreground mb-4">
                    This engagement emphasized brand positioning and catalogue storytelling rather than e-commerce
                    transactions. The website highlights featured departments, special promotions, store ambiance, and
                    convenient contact options to bring foot traffic into the flagship location.
                  </p>
                  <div className="flex items-center text-sm text-green-600">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="font-medium">
                      Delivery: Launched and handed off with reusable content templates.
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Visual Snapshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureTiles.map((tile) => (
              <Card key={tile.title} className="overflow-hidden">
                <div className={`relative h-48 bg-gradient-to-br ${tile.gradient}`}>
                  <div className="absolute inset-0 flex items-center justify-center">{tile.icon}</div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded p-2">
                      <h4 className="font-semibold text-sm">{tile.title}</h4>
                      <p className="text-xs text-muted-foreground">{tile.subtitle}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-blue-600" />
                  Project Role
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Marketing-Centric Build</h4>
                    <p className="text-sm text-muted-foreground">
                      Partnered with the Dubai-based client team to translate their in-store experience into web-ready
                      campaign sections and product spotlights.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Design Implementation</h4>
                    <p className="text-sm text-muted-foreground">
                      Crafted Elementor templates with custom CSS polish to preserve brand colors, textures, and
                      typography.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Content Flexibility</h4>
                    <p className="text-sm text-muted-foreground">
                      Delivered configurable sections—daily offers, featured aisles, testimonials—that store managers
                      can update without code.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-emerald-600" />
                  Showcase Highlights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-2">
                  {highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Code className="h-5 w-5 mr-2 text-purple-600" />
                Toolkit & Deliverables
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 justify-center">
                {capabilities.map((capability) => (
                  <Badge key={capability} variant="outline" className="bg-background/80 px-3 py-1">
                    {capability}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-green-500/10 to-emerald-700/10 border-green-500/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Outcomes & Learnings</h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                The project sharpened my ability to design for narrative and merchandising goals rather than checkout
                flows. It also reinforced collaboration practices across remote teams—aligning content, photography, and
                marketing strategy to ship a website that amplifies in-store experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-gradient-to-r from-green-500 to-emerald-700">
                  <Link href="/#contact">Plan a Showcase Site</Link>
                </Button>
                <Button variant="outline" asChild className="bg-transparent">
                  <Link href="/#projects">Explore More Work</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
