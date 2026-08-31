import type React from "react"
import "@/app/globals.css"
import { Space_Grotesk, Manrope } from "next/font/google"
import { ThemeProvider } from "@/components/providers/theme-provider"
import Header from "@/components/sections/header"
import type { Metadata, Viewport } from "next"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: "Abdul Hameed - Software Development Engineer",
  description:
    "Professional portfolio of Abdul Hameed, a Software Development Engineer specializing in scalable products, full-stack systems, and premium 3D web experiences.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth dark">
      <body className={`${spaceGrotesk.variable} ${manrope.variable} overflow-x-hidden font-[var(--font-body)]`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
