import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Project Details - Abdul Hameed",
  description: "Selected project details and showcase pages from Abdul Hameed's portfolio.",
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
