"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import ParallaxBackground from "./parallax-background"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Crafting reliable systems behind the scenes."

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      <ParallaxBackground imageUrl="/hero-bg.jpg" opacity={0.2} speed={0.3} />

      <div className="container px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between z-10 gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            Abdul Hameed –{" "}
            <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-orange-400 bg-clip-text text-transparent">
              Backend Developer
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 h-8">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transform transition-transform hover:scale-105"
              asChild
            >
              <Link href="#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-600/10 transform transition-transform hover:scale-105 bg-transparent"
              asChild
            >
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
        </motion.div>

        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex-1 flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Gradient Background Circle */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-orange-400 rounded-full blur-2xl opacity-20 scale-110"></div>

            {/* Profile Image Container */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-transparent shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 p-1 rounded-full">
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <Image
                    src="/abdul-hameed-profile.jpg"
                    alt="Abdul Hameed - Backend Developer"
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-500"
                    priority
                    sizes="(max-width: 768px) 320px, 384px"
                  />
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-60"
            ></motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-orange-400 to-pink-600 rounded-full opacity-60"
            ></motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about">
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </Link>
      </div>
    </section>
  )
}
