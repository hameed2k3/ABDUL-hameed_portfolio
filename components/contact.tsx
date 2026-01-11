"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Loader2, AlertCircle } from "lucide-react"

// Animation variants for the contact cards
const contactCardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

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
      // Send to local API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitting(false)
        setFormData({ name: "", email: "", subject: "", message: "" })
        setIsSubmitted(true)
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        throw new Error(data.error || "Form submission failed")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setIsSubmitting(false)
      setSubmitError(
        "Failed to send message. Please try again or email me directly at abdulhameedabdullathif@gmail.com",
      )
    }
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground">
            Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-1 space-y-6"
          >
            {[
              {
                icon: <Mail className="h-6 w-6 text-purple-600" />,
                title: "Email",
                content: "abdulhameedabdullathif@gmail.com",
                color: "purple",
                delay: 0,
              },
              {
                icon: <Phone className="h-6 w-6 text-blue-600" />,
                title: "Phone",
                content: "+91 9361679436",
                color: "blue",
                delay: 1,
              },
              {
                icon: <MapPin className="h-6 w-6 text-orange-400" />,
                title: "Location",
                content: "Chennai, India",
                color: "orange",
                delay: 2,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                custom={index}
                variants={contactCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-none bg-background/50 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className={`p-3 rounded-full bg-${item.color}-600/10`}>{item.icon}</div>
                    <div>
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.content}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2"
          >
            <Card className="border-none bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center h-full py-12">
                    <div className="p-3 rounded-full bg-green-600/10 mb-4">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground text-center">
                      Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium">
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
                          className="transition-all duration-300 focus:ring-2 focus:ring-purple-600/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium">
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
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject of your message"
                        required
                        minLength={5}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        className="min-h-[150px] resize-none"
                        required
                        minLength={10}
                      />
                    </div>

                    {submitError && (
                      <div className="flex items-center gap-2 text-red-500">
                        <AlertCircle className="h-4 w-4" />
                        <p>{submitError}</p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform transition-all duration-300 hover:scale-105"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
