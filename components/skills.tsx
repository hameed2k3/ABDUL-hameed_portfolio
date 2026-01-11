"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const technicalSkills = [
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React.js", level: 85 },
  { name: "Java", level: 90 },
  { name: "Python", level: 85 },
  { name: "MySQL", level: 80 },
  { name: "WordPress", level: 85 },
  { name: "Node.js", level: 75 },
]

const tools = [
  "Git & GitHub",
  "VS Code",
  "WordPress",
  "Elementor",
  "MySQL Workbench",
  "Eclipse IDE",
  "PyCharm",
  "Postman",
]

const languages = ["JavaScript", "Java", "Python", "HTML/CSS", "SQL", "PHP"]

// Add animation variants for the progress bars
const progressVariants = {
  hidden: { width: 0 },
  visible: (i) => ({
    width: `${i}%`,
    transition: { duration: 1, ease: "easeOut" },
  }),
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative bg-background/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground">
            My expertise spans across various full-stack technologies, programming languages, and development tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6">Technologies</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                  className="space-y-2"
                >
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                      custom={skill.level}
                      variants={progressVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6">Programming Languages</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {languages.map((language, index) => (
                  <motion.div
                    key={language}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.05 * index }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="border-none bg-background/80 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                      <CardContent className="flex items-center justify-center p-6">
                        <span className="font-medium">{language}</span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">Tools & Platforms</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.05 * index }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="border-none bg-background/80 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                      <CardContent className="flex items-center justify-center p-4 text-center">
                        <span className="font-medium text-sm">{tool}</span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
