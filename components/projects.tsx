"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, useAnimation, type PanInfo, useMotionValue } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Shield,
  Banknote,
  Eye,
  ShoppingCart,
  Store,
  Gamepad2,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "AI Integrated Online Voting System",
    description:
      "Secure voting system with facial recognition, OTP verification, and blockchain integration. Features admin monitoring and camera-based voter validation.",
    image: "/project1.jpg",
    tags: ["React.js", "JavaScript", "Facial Recognition", "Blockchain", "Security"],
    github: "https://github.com/hameed2k3/ai-voting-system",
    demo: "https://votingsystemonline.vercel.app/",
    color: "from-purple-600 to-blue-600",
    icon: <Shield className="h-6 w-6" />,
    timeline: "Final Year Project, 2024–2025",
    category: "Academic",
  },
  {
    title: "Chettinadu Supermarket Website",
    description:
      "Product showcase website for a Dubai-based supermarket highlighting curated catalogues, in-store promotions, and brand storytelling without online checkout.",
    image: "/project2.jpg",
    tags: ["WordPress", "Elementor", "Product Showcase", "Responsive Design"],
    github: "https://github.com/hameed2k3/chettinadu-supermarket",
    demo: "/project/chettinadu-supermarket",
    color: "from-green-500 to-emerald-700",
    icon: <Store className="h-6 w-6" />,
    timeline: "Internship Project, 2025",
    category: "Professional",
  },
  {
    title: "Grocery Web Application",
    description:
      "Responsive MERN stack grocery app built for Naan Muthalvan Hackathon. Features user authentication, shopping cart, and product catalog.",
    image: "/project3.jpg",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "MERN Stack"],
    github: "https://github.com/hameed2k3/grocery-app",
    demo: "https://grocery-web-naanmuthalvan.vercel.app/",
    color: "from-orange-400 to-pink-600",
    icon: <ShoppingCart className="h-6 w-6" />,
    timeline: "Naan Muthalvan Hackathon, 2024",
    category: "Hackathon",
  },
  {
    title: "Simple Banking System",
    description:
      "Console-based banking application built with core Java. Supports account creation, deposits, withdrawals, and balance inquiries with OOP principles.",
    image: "/project4.jpg",
    tags: ["Java", "OOP", "Console Application", "Banking"],
    github: "https://github.com/hameed2k3/banking-system",
    demo: "https://github.com/hameed2k3/Bankingconsole",
    color: "from-blue-600 to-cyan-500",
    icon: <Banknote className="h-6 w-6" />,
    timeline: "Academic Project, 2023",
    category: "Academic",
  },
  {
    title: "Keylogger System",
    description:
      "Educational keylogger tool developed in Python for security awareness and research purposes. Demonstrates cybersecurity concepts.",
    image: "/project5.jpg",
    tags: ["Python", "Security", "Educational", "Cybersecurity"],
    github: "https://github.com/hameed2k3/keylogger-system",
    demo: "https://keylogger-demo.example.com",
    color: "from-red-500 to-orange-500",
    icon: <Eye className="h-6 w-6" />,
    timeline: "Personal Project, 2023",
    category: "Personal",
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "Classic two-player game built with Java Swing. Focused on object-oriented programming concepts and GUI development.",
    image: "/project6.jpg",
    tags: ["Java", "Swing", "GUI", "Game Development"],
    github: "https://github.com/hameed2k3/tic-tac-toe",
    demo: "https://github.com/hameed2k3/Tic-tac-toe",
    color: "from-indigo-600 to-purple-600",
    icon: <Gamepad2 className="h-6 w-6" />,
    timeline: "Personal Project, 2023",
    category: "Personal",
  },
]

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [sliderWidth, setSliderWidth] = useState(0)
  const [itemWidth, setItemWidth] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [isDragging, setIsDragging] = useState(false)

  const sliderRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const x = useMotionValue(0)

  // Calculate dimensions on mount and resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setSliderWidth(containerRef.current.offsetWidth)

        // Calculate item width based on screen size
        const width = containerRef.current.offsetWidth
        if (width < 640) {
          setItemWidth(width - 40) // Full width on mobile with some padding
        } else if (width < 1024) {
          setItemWidth((width - 40) / 2) // 2 items on tablet
        } else {
          setItemWidth((width - 40) / 3) // 3 items on desktop
        }
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  // Calculate visible items based on screen size
  const getVisibleItems = useCallback(() => {
    if (sliderWidth < 640) return 1
    if (sliderWidth < 1024) return 2
    return 3
  }, [sliderWidth])

  const visibleItems = getVisibleItems()
  const maxIndex = projects.length - visibleItems

  const nextSlide = useCallback(() => {
    const newIndex = activeIndex >= maxIndex ? 0 : activeIndex + 1
    setActiveIndex(newIndex)
    controls.start({ x: -newIndex * itemWidth })
  }, [activeIndex, maxIndex, itemWidth, controls])

  const prevSlide = useCallback(() => {
    const newIndex = activeIndex <= 0 ? maxIndex : activeIndex - 1
    setActiveIndex(newIndex)
    controls.start({ x: -newIndex * itemWidth })
  }, [activeIndex, maxIndex, itemWidth, controls])

  const goToSlide = useCallback(
    (index: number) => {
      const newIndex = Math.max(0, Math.min(index, maxIndex))
      setActiveIndex(newIndex)
      controls.start({ x: -newIndex * itemWidth })
    },
    [maxIndex, itemWidth, controls],
  )

  // Autoplay functionality
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay && !isDragging) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [autoplay, isDragging, nextSlide])

  const handleDragStart = () => {
    setIsDragging(true)
    setAutoplay(false)
  }

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false)
    setAutoplay(true)

    const threshold = itemWidth / 2
    const currentOffset = -activeIndex * itemWidth
    const dragOffset = info.offset.x

    if (dragOffset > threshold) {
      // Dragged right significantly
      prevSlide()
    } else if (dragOffset < -threshold) {
      // Dragged left significantly
      nextSlide()
    } else {
      // Return to current slide
      controls.start({ x: currentOffset })
    }
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground">
            Here are some of my recent projects showcasing full-stack development, security systems, and innovative
            solutions. Each project demonstrates different aspects of my technical skills and problem-solving abilities.
          </p>
        </motion.div>

        <div className="relative" ref={containerRef}>
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm shadow-md border-none",
              activeIndex <= 0 ? "opacity-50 cursor-not-allowed" : "opacity-100",
            )}
            onClick={prevSlide}
            disabled={activeIndex <= 0}
            aria-label="Previous project"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm shadow-md border-none",
              activeIndex >= maxIndex ? "opacity-50 cursor-not-allowed" : "opacity-100",
            )}
            onClick={nextSlide}
            disabled={activeIndex >= maxIndex}
            aria-label="Next project"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Carousel Container */}
          <div
            className="overflow-hidden"
            ref={sliderRef}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <motion.div
              className="flex"
              animate={controls}
              initial={{ x: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ x }}
              drag="x"
              dragConstraints={{ left: -maxIndex * itemWidth, right: 0 }}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              dragElastic={0.1}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="flex-shrink-0 px-2 py-4"
                  style={{ width: itemWidth }}
                  whileHover={{
                    scale: 1.03,
                    zIndex: 10,
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full overflow-hidden border-none bg-background/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
                    <div className="relative h-48 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-80`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white opacity-90 group-hover:scale-110 transition-transform duration-300">
                          {project.icon}
                        </div>
                      </div>
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="bg-background/80 text-xs">
                          {project.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{project.timeline}</span>
                      </div>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <CardDescription className="text-sm">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="bg-background/80 text-xs px-2 py-1">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <Button
                        size="sm"
                        className={`bg-gradient-to-r ${project.color} transition-all duration-300 hover:scale-105`}
                        asChild
                      >
                        <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeIndex === index ? "bg-purple-600 w-6" : "bg-gray-400 bg-opacity-50"
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
