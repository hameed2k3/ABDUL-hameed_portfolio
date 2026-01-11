"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Database, Server, Code, Lock, Cpu, GitBranch, MapPin, Calendar, Award, Briefcase } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"

const skills = [
  { name: "Full-Stack Development", icon: <Code className="h-8 w-8 text-purple-600" />, level: 90 },
  { name: "WordPress", icon: <Server className="h-8 w-8 text-green-600" />, level: 85 },
  { name: "MySQL", icon: <Database className="h-8 w-8 text-blue-600" />, level: 80 },
  { name: "Security Systems", icon: <Lock className="h-8 w-8 text-red-600" />, level: 85 },
  { name: "Problem Solving", icon: <Cpu className="h-8 w-8 text-orange-400" />, level: 95 },
  { name: "Version Control", icon: <GitBranch className="h-8 w-8 text-gray-600" />, level: 88 },
]

const quickFacts = [
  { icon: <MapPin className="h-5 w-5" />, label: "Location", value: "Chennai, India", color: "text-blue-600" },
  {
    icon: <Briefcase className="h-5 w-5" />,
    label: "Role",
    value: "Junior Software Developer",
    color: "text-purple-600",
  },
  { icon: <Calendar className="h-5 w-5" />, label: "Experience", value: "Less than 1 year", color: "text-green-600" },
  { icon: <Award className="h-5 w-5" />, label: "CGPA", value: "8.4/10", color: "text-orange-600" },
]

export default function About() {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    visible: prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
        </motion.div>

        {/* Hero Profile Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center gap-12 mb-20"
        >
          {/* Profile Image with Floating Elements */}
          <div className="relative flex-shrink-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Animated Background Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-purple-600/30"
              ></motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-4 rounded-full border-2 border-dashed border-blue-600/30"
              ></motion.div>

              {/* Profile Photo */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-transparent shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 p-1 rounded-full">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background">
                    <Image
                      src="/abdul-hameed-profile.jpg"
                      alt="Abdul Hameed"
                      fill
                      className="object-cover object-center hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 256px, 320px"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Tech Icons */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <Code className="h-6 w-6 text-white" />
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <Server className="h-6 w-6 text-white" />
              </motion.div>
              <motion.div
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute top-1/2 -left-8 w-10 h-10 bg-gradient-to-r from-orange-400 to-pink-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <Database className="h-5 w-5 text-white" />
              </motion.div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold mb-4"
            >
              Hi, I&apos;m <span className="text-purple-600">Abdul Hameed</span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-muted-foreground mb-6 leading-relaxed"
            >
              A passionate <span className="font-semibold text-foreground">Backend & Full-Stack Developer</span>{" "}
              currently crafting a travel booking experience as a{" "}
              <span className="text-purple-600 font-semibold">Junior Software Developer at Goeasytrip</span>. I
              architect robust Next.js and Django solutions, integrate critical APIs, and keep deployments humming on
              AWS. Previously, I contributed to bespoke WordPress builds during my remote internship with Growth Spell
              Software Solution.
            </motion.p>

            {/* Quick Facts Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {quickFacts.map((fact, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50"
                >
                  <div className={`${fact.color}`}>{fact.icon}</div>
                  <div>
                    <p className="text-xs text-muted-foreground">{fact.label}</p>
                    <p className="font-semibold text-sm">{fact.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center lg:justify-start space-x-4"
            >
              {[
                {
                  icon: <Github className="h-5 w-5" />,
                  href: "https://github.com/hameed2k3",
                  color: "hover:bg-gray-600",
                },
                {
                  icon: <Linkedin className="h-5 w-5" />,
                  href: "https://www.linkedin.com/in/abdul-hameed-abdul-lathif-567064250/",
                  color: "hover:bg-blue-600",
                },
                {
                  icon: <Twitter className="h-5 w-5" />,
                  href: "https://x.com/ABDULHAMEED1324",
                  color: "hover:bg-sky-500",
                },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 transition-all duration-300 hover:scale-110 ${social.color} hover:text-white group`}
                >
                  {social.icon}
                </Link>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Skills Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-12">
            Technical{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div key={skill.name} variants={itemVariants} transition={{ duration: 0.5 }}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-none bg-background/50 backdrop-blur-sm group overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-full bg-background/80 shadow-inner group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-purple-600">{skill.level}%</div>
                      </div>
                    </div>
                    <h4 className="font-semibold mb-3">{skill.name}</h4>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Education & Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Current Role */}
          <Card className="border-none bg-gradient-to-br from-purple-600/10 to-blue-600/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-purple-600 mr-4">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Current Role</h4>
                  <p className="text-muted-foreground">Professional Experience</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-purple-600">Junior Software Developer</h5>
                  <p className="text-sm text-muted-foreground">Goeasytrip • Remote (Singapore)</p>
                  <p className="text-sm text-muted-foreground">Aug 2025 - Present</p>
                </div>
                <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  <li>
                    Architecting and launching a full-stack travel booking platform from Figma to production using
                    React, Next.js, and Python Django.
                  </li>
                  <li>
                    Building RESTful services that orchestrate bookings, user accounts, Amadeus SDK integrations, and
                    secure payment workflows.
                  </li>
                  <li>
                    Deploying and tuning the platform on AWS to uphold performance, scalability, and uptime targets.
                  </li>
                  <li>Partnering with product, design, and QA teams to deliver delightful travel experiences.</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="border-none bg-gradient-to-br from-green-500/10 to-emerald-600/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-green-600 mr-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Education</h4>
                  <p className="text-muted-foreground">Academic Background</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h5 className="font-semibold text-green-600">B.Tech in Information Technology</h5>
                  <p className="text-sm text-muted-foreground">Aalim Muhammed Salegh College of Engineering</p>
                  <p className="text-sm text-muted-foreground">2021 - 2025 • CGPA: 8.4</p>
                </div>
                <p className="text-sm leading-relaxed">
                  Specialized in software development, database management, and system design. Active participant in
                  hackathons and technical competitions.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
