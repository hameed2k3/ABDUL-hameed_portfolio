"use client"

import type React from "react"
import { useState } from "react"
import { AlertCircle, CheckCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import SectionReveal from "@/components/common/section-reveal"
import { CodeWindow } from "@/components/common/code-window"

const contactLinks = [
  { key: "email", label: "abdulhameedabdullathif@gmail.com", href: "mailto:abdulhameedabdullathif@gmail.com" },
  { key: "phone", label: "+91 9361679436", href: "tel:+919361679436" },
  {
    key: "linkedin",
    label: "abdul-hameed ↗",
    href: "https://www.linkedin.com/in/abdul-hameed-abdul-lathif-567064250/",
    external: true,
  },
  { key: "location", label: "Chennai, India" },
]

const labelClass = "font-mono text-[11px] text-primary"
const fieldClass = "bg-background font-mono text-sm"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })

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
        headers: { "Content-Type": "application/json" },
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
      setSubmitError("The form could not send right now. Please use email or LinkedIn instead.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="border-t border-border py-20 md:py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionReveal>
            <p className="eyebrow">06 contact</p>
            <h2 className="section-title mt-3">
              Let&apos;s work together<span className="text-primary">.</span>
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Need help with frontend, full-stack work, or a more polished product? Send a message and I&apos;ll reply.
            </p>

            <dl className="mt-8 max-w-md">
              {contactLinks.map(({ key, label, href, external }) => (
                <div key={key} className="flex gap-4 border-b border-border py-3 last:border-b-0">
                  <dt className="w-20 shrink-0 font-mono text-xs text-muted-foreground">{key}</dt>
                  <dd className="min-w-0 break-words text-sm">
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="hover:text-primary"
                      >
                        {label}
                      </a>
                    ) : (
                      label
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <CodeWindow title="send-message.sh">
              <div className="p-5 md:p-6">
                {isSubmitted ? (
                  <div className="flex min-h-[22rem] flex-col items-center justify-center text-center">
                    <CheckCircle className="h-8 w-8 text-primary" />
                    <h3 className="mt-4 text-2xl font-semibold">Message sent</h3>
                    <p className="mt-2 max-w-sm text-muted-foreground">Thanks for reaching out. I&apos;ll reply soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <p className="font-mono text-sm text-muted-foreground">
                      <span className="text-primary">$</span> ./send --to abdul
                    </p>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className={labelClass}>
                          --name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          minLength={2}
                          className={fieldClass}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="email" className={labelClass}>
                          --email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          required
                          className={fieldClass}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="subject" className={labelClass}>
                        --subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What are you building?"
                        required
                        minLength={5}
                        className={fieldClass}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="message" className={labelClass}>
                        --message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project."
                        className={`${fieldClass} min-h-[150px]`}
                        required
                        minLength={10}
                      />
                    </div>

                    {submitError && (
                      <div
                        role="alert"
                        className="flex items-center gap-2 rounded-md border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive"
                      >
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        <p>{submitError}</p>
                      </div>
                    )}

                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full font-mono text-sm">
                      <Send />
                      {isSubmitting ? "sending..." : "send message"}
                    </Button>
                  </form>
                )}
              </div>
            </CodeWindow>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
