"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"



const languages = [
  "JavaScript",
  "Java",
  "Python",
  "HTML/CSS",
  "MySQL",
  "PHP",
  "React.js",
  "Node.js",
  "WordPress",
]

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

        <div className="space-y-12">
          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Programming Languages</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center">
              {languages.map((language, index) => (
                <motion.div
                  key={language}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="border-none bg-background/80 backdrop-blur-sm hover:shadow-md transition-all duration-300 h-full">
                    <CardContent className="flex items-center justify-center p-6 h-full text-center">
                      <span className="font-medium">{language}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
