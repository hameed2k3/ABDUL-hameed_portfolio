import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Project Details - Abdul Hameed",
  description: "Detailed view of Abdul Hameed's professional projects and development work.",
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
