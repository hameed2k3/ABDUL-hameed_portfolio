import type React from "react"
import "@/app/globals.css"
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/providers/theme-provider"
import Header from "@/components/sections/header"
import type { Metadata, Viewport } from "next"

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: "Abdul Hameed - Software Development Engineer",
  description:
    "Portfolio of Abdul Hameed, a backend-leaning full-stack Software Development Engineer working with Spring Boot, NestJS, React, PostgreSQL, and DigitalOcean deployments.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${interTight.variable} ${inter.variable} ${jetbrainsMono.variable} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
