# Project Context: ABDUL-hameed Portfolio

## Overview
This is a modern, premium Next.js and React-based portfolio website for **Abdul Hameed**, a Backend & Full-Stack Developer (Software Development Engineer at Enarxi Innovation Private Limited). It features an ultra-modern, glassmorphic UI design system with multi-layered frosted panels, translucent cards, specular highlights, luminous badges, and smooth Framer Motion animations. Integrated with Stitch AI via Model Context Protocol (MCP).

## Technical Stack
- **Framework**: Next.js (App Router), React, TypeScript
- **Styling**: Tailwind CSS, Custom Glassmorphism CSS design system (`app/globals.css`), Framer Motion
- **UI Components**: shadcn/ui, Lucide Icons, Glass Panels, Specular Highlight Cards
- **MCP Integration**: Stitch AI (`https://stitch.googleapis.com/mcp`) configured in `.agents/mcp_config.json`
- **Deployment**: Vercel

## Core Structure (Industry Standard Organization)
- `app/`: Next.js App Router layout, pages, and API endpoints
  - `page.tsx`: Main page assembling all portfolio sections
  - `globals.css`: Glassmorphism design system utility classes (`.glass-panel`, `.glass-card`, `.glass-pill`, etc.)
  - `api/contact/route.ts`: Serverless Nodemailer email route
  - `api/leetcode/`: LeetCode stats API integration
- `components/`: Structured modular UI components
  - `sections/`: Layout & page sections (`hero`, `about`, `projects`, `capability-showcase`, `skills`, `resume`, `contact`, `header`, `footer`, `leetcode-profile`)
  - `common/`: Shared UI & animation components (`glow-panel`, `section-reveal`, `tilt-card`, `custom-cursor`, `parallax-background`, `preloader`, `scroll-to-top`)
  - `providers/`: Context and theme providers (`theme-provider`, `theme-toggle`)
  - `ui/`: Atomic UI primitives (shadcn/Radix components)
- `docs/`: Centralized documentation folder
  - `CONTEXT.md`: Project architecture & overview
  - `SESSION.md`: Active task & session tracking
  - `DEPLOYMENT.md`: Vercel deployment guide & env variable setup
  - `portfolio-motion-plan.md`: Motion design system specification
- `hooks/`: Custom React hooks (`use-mobile`, `use-toast`, `use-animation-frame`)
- `lib/`: Shared utilities (`utils.ts`, `motion.ts`)
- `public/`: Static assets, images, and resume PDF
