"use client"

import type React from "react"
import { useState } from "react"
import { AlertCircle, ArrowUpRight, CheckCircle, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import SectionReveal from "@/components/common/section-reveal"
import GlowPanel from "@/components/common/glow-panel"
import Link from "next/link"

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    content: "abdulhameedabdullathif@gmail.com",
    tone: "text-cyan-200 border-cyan-400/30 bg-cyan-400/10 shadow-[0_0_15px_rgba(34,211,238,0.2)]",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91 9361679436",
    tone: "text-orange-200 border-orange-400/30 bg-orange-400/10 shadow-[0_0_15px_rgba(249,115,22,0.2)]",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Chennai, India",
    tone: "text-emerald-200 border-emerald-400/30 bg-emerald-400/10 shadow-[0_0_15px_rgba(52,211,153,0.2)]",
  },
]

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Form submission failed")
      }

      setFormData({ name: "", email: "", subject: "", message: "" })
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitError("The form could not send right now. Please use email or LinkedIn as a fallback.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-spacing relative">
      <div className="container px-4 md:px-6">
        <SectionReveal className="mb-12 max-w-3xl">
          <span className="glass-tag mb-5">Contact</span>
          <h2 className="font-[var(--font-display)] text-4xl font-semibold tracking-tight md:text-6xl">
            Let&apos;s talk about your <span className="studio-text-gradient">product, website, or frontend needs</span>.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            If you are building a product and need support with frontend development, full-stack implementation, or a
            more polished user experience, I&apos;d be glad to connect.
          </p>
        </SectionReveal>

        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <SectionReveal>
            <div className="space-y-4">
              {contactCards.map((card) => (
                <GlowPanel key={card.title} className="p-5">
                  <div className="flex items-start gap-4">
                    <div className={`rounded-2xl border p-3 ${card.tone}`}>
                      <card.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-[var(--font-display)] text-xl font-semibold text-white">{card.title}</h3>
                      <p className="mt-2 text-sm text-slate-300">{card.content}</p>
                    </div>
                  </div>
                </GlowPanel>
              ))}

              <GlowPanel className="p-6">
                <h3 className="font-[var(--font-display)] text-2xl font-semibold text-white">Fast fallback options</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  If the contact form is unavailable, you can reach me directly by email or LinkedIn.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button asChild className="glass-button-primary">
                    <Link href="mailto:abdulhameedabdullathif@gmail.com">
                      Email Me <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild className="glass-button-secondary">
                    <Link
                      href="https://www.linkedin.com/in/abdul-hameed-abdul-lathif-567064250/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn <Linkedin className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </GlowPanel>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <GlowPanel className="p-6 md:p-8">
              {isSubmitted ? (
                <Card className="border-none bg-transparent shadow-none">
                  <CardContent className="flex min-h-[28rem] flex-col items-center justify-center text-center">
                    <div className="mb-5 rounded-full border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-200 shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                      <CheckCircle className="h-7 w-7" />
                    </div>
                    <h3 className="font-[var(--font-display)] text-3xl font-semibold text-white">Message Sent</h3>
                    <p className="mt-3 max-w-md text-sm leading-7 text-slate-300">
                      Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-300">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        minLength={2}
                        className="glass-input h-12 px-4"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-300">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                        className="glass-input h-12 px-4"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-slate-300">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What are you building?"
                      required
                      minLength={5}
                      className="glass-input h-12 px-4"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-300">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, the kind of frontend support you need, or the experience you want to build."
                      className="glass-input min-h-[180px] p-4"
                      required
                      minLength={10}
                    />
                  </div>

                  {submitError && (
                    <div className="flex items-center gap-2 rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm text-red-200 shadow-[0_0_15px_rgba(248,113,113,0.2)]">
                      <AlertCircle className="h-4 w-4" />
                      <p>{submitError}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="glass-button-primary w-full py-4 text-base"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </GlowPanel>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}

