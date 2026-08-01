"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Briefcase, GraduationCap, Award, CheckCircle, Server } from "lucide-react"

const experiences = [
  {
    title: "Software Development Engineer",
    company: "Enarxi Innovation Private Limited (Remote, India)",
    period: "Jan 2026 - Present",
    description:
      "Building scalable product experiences, business platforms, and 3D rendered web-based applications across frontend and backend systems.",
    type: "work",
    bullets: [
      "Build and maintain production web applications across frontend and backend systems for business, monitoring, and internal workflow products.",
      "Work across React.js, Next.js, NestJS, MongoDB, PostgreSQL, and deployment environments to ship features, improve reliability, and support day-to-day product execution.",
      "Specialize in 3D rendered web-based projects that blend immersive interfaces with production-ready application architecture.",
      "Use agentic AI coding workflows to speed up implementation, debugging, deployment, and iteration while maintaining code quality and delivery pace.",
    ],
  },
  {
    title: "Junior Software Developer",
    company: "Goeasytrip (Remote, Singapore)",
    period: "Aug 2025 - Apr 2026",
    description:
      "Building a full-stack travel booking platform end-to-end with React and Java Spring Boot, integrating Amadeus SDK, secure payment gateways, and AWS deployments.",
    type: "work",
    bullets: [
      "Architected and developed a SOAP-based airline booking engine using Java 21 and Spring Boot, implementing complete flight search, booking, and ticketing workflows.",
      "Designed and built a robust RESTful backend integrating Amadeus GDS SOAP APIs for flight search, sell, PNR creation, pricing, TST generation, and e-ticket issuance.",
      "Implemented custom SOAP header interceptors handling WS-Addressing, security tokens, and sequence management.",
      "Developed a cash payment flow prototype for MVP, integrating FP element addition, PNR commit, and secure ticket issuance logic.",
      "Engineered structured logging, transactional flow control, error handling, and session validation for production-grade API communication.",
    ],
  },
  {
    title: "Web Development Intern",
    company: "Growth Spell Software Solution (Remote, Dubai)",
    period: "Apr 2025 - Jun 2025",
    description:
      "Delivered bespoke WordPress solutions, Elementor-based layouts, and custom enhancements for international retail clients.",
    type: "work",
    bullets: [
      "Customized WordPress themes and plugins to meet client branding and functionality requirements.",
      "Authored reusable JavaScript and CSS to unlock bespoke UI interactions beyond template capabilities.",
      "Shipped responsive, cross-device pages and optimized assets for fast, reliable performance.",
      "Collaborated with senior developers and designers to hit global stakeholder timelines.",
    ],
  },
]

const education = [
  {
    title: "B.Tech in Information Technology",
    company: "Aalim Muhammed Salegh College of Engineering",
    period: "Sept 2021 - June 2025",
    description:
      "Anna University, Chennai - CGPA: 8.4 - Coursework spans software engineering, databases, and security.",
    type: "education",
  },
]

const certifications = [
  {
    title: "Full Stack Web Development",
    company: "Udemy",
    period: "2023",
    description: "Comprehensive training across modern front-end and back-end tooling.",
    type: "certification",
  },
  {
    title: "Frontend Bootcamp",
    company: "Microsoft Student Ambassador",
    period: "2022",
    description: "Hands-on UI engineering sprint culminating in an Instagram Clone.",
    type: "certification",
  },
]

const timelineItems = [...experiences, ...education, ...certifications].sort((a, b) => {
  const parseYear = (period: string) => {
    const yearSegment = period.split(" - ")[0]
    const pieces = yearSegment.split(" ")
    return Number.parseInt(pieces[pieces.length - 1])
  }

  return parseYear(b.period) - parseYear(a.period)
})

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Resume() {
  return (
    <section id="resume" className="py-20 relative">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Resume</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground mb-8">
            I&apos;m a Software Development Engineer with 1+ years of professional experience, currently building
            product platforms and 3D web experiences at Enarxi Innovation Private Limited. Here&apos;s how my
            experience, education, and certifications align.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform transition-transform hover:scale-105"
          >
            <a
              href="/asset/Abdul_Hameed__Developer_ (1).pdf"
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>
        </motion.div>

        <div className="relative mt-16">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>

          <motion.div
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12"
          >
            {timelineItems.map((item, index) => (
              <motion.div
                key={`${item.title}-${item.period}`}
                variants={itemVariants}
                transition={{ duration: 0.5 }}
                className={`relative flex items-center justify-between ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                } md:flex-row-${index % 2 === 0 ? "reverse" : "normal"} flex-col-reverse`}
              >
                <div
                  className={`md:w-5/12 w-full ${
                    index % 2 === 0 ? "md:text-right text-left" : "text-left"
                  } mt-6 md:mt-0`}
                >
                  <Card className="border-none bg-background/50 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-purple-600 font-medium">{item.company}</p>
                      <p className="text-sm text-muted-foreground mb-3">{item.period}</p>
                      <p className="text-muted-foreground mb-3">{item.description}</p>
                      {"bullets" in item && item.bullets ? (
                        <ul className="space-y-2 text-sm text-muted-foreground/90">
                          {item.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute md:left-1/2 left-0 md:top-auto top-0 transform md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg">
                  {item.type === "work" ? (
                    <Briefcase className="h-5 w-5 text-white" />
                  ) : item.type === "education" ? (
                    <GraduationCap className="h-5 w-5 text-white" />
                  ) : (
                    <Award className="h-5 w-5 text-white" />
                  )}
                </div>

                <div className="md:w-5/12 w-full"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
          <Card className="border-none bg-gradient-to-br from-purple-600/10 to-blue-600/10 backdrop-blur-sm">
            <CardContent className="p-8 space-y-4">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-purple-600 mr-4">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Current Focus</h4>
                  <p className="text-muted-foreground">Software Development Engineer at Enarxi Innovation Private Limited</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                I&apos;m building and maintaining production web applications across frontend and backend systems,
                shipping features using React.js, Next.js, NestJS, MongoDB, and PostgreSQL, and specializing in 3D
                rendered web-based projects that demand both visual quality and engineering reliability.
              </p>
              <div className="flex flex-wrap gap-3">
                {["React.js", "Next.js", "NestJS", "MongoDB", "PostgreSQL", "3D Web"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-background/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-purple-600 border border-purple-600/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-none bg-gradient-to-br from-green-500/10 to-emerald-600/10 backdrop-blur-sm">
            <CardContent className="p-8 space-y-4">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-600 mr-4">
                  <Server className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Travel Engine Delivery</h4>
                  <p className="text-muted-foreground">Junior Software Developer at Goeasytrip</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Designed and developed a SOAP-based airline booking engine using Java 21 and Spring Boot. Integrated
                Amadeus GDS SOAP APIs for flight searches, selling PNRs, ticket issuance, and engineered robust
                session validations and transactional security.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Java Spring Boot", "SOAP APIs", "Amadeus GDS", "AWS"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-background/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-green-600 border border-green-600/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
