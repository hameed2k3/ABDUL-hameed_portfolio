# Resume content (text version)

The PDF is generated from `docs/resume/resume.html`. Edit that file, then re-export (see the command in docs/resume/README.md).

The portfolio (`components/sections/*`) already matches this file, except the items under "Needs your input".
Edit the resume PDF from this text so both stay in sync.

## Header
ABDUL HAMEED ABDUL LATHIF
Software Development Engineer (Backend / Full-Stack)
Chennai, India | +91 9361679436 | [EMAIL: confirm] | github.com/hameed2k3 | [LINKEDIN: confirm] | abdul-hameed-portfolio.vercel.app

## Summary
Backend-leaning full-stack developer with over a year of experience in Spring Boot, NestJS, and React. Builds REST APIs and PostgreSQL schemas, integrates Amadeus SOAP flight services, and deploys services to DigitalOcean with PM2, Nginx, and Certbot. Published a research paper on an AI-integrated voting system (IJRPR).

## Technical skills
- Languages: Java, JavaScript, TypeScript, Python, SQL
- Backend: Spring Boot, NestJS, Node.js, Express.js, REST APIs, SOAP, XML, JWT, OAuth 2.0
- Frontend: React, Next.js, HTML, CSS
- Databases: PostgreSQL, MongoDB, SQLite
- Deployment and servers: DigitalOcean (VPS), Nginx, PM2, Certbot (SSL), Vercel, Render, IONOS
- Tools: Git, GitHub, Maven, Postman

## Experience

### Software Development Engineer | Jan 2026 - Present
Enarxi Innovation Private Limited
- Build and maintain web applications with NestJS, PostgreSQL, and React, across both the API and the user interface.
- Design REST endpoints and database tables for new features, and fix bugs raised by teammates and users.
- Deploy releases to DigitalOcean VPS servers and use PM2 to run and restart multiple backend services.
- Configure Nginx as a reverse proxy to route traffic to each service, and set up SSL certificates with Certbot.
- [ADD: one real bug or incident you fixed and its result, replacing "trace failures to the root cause"]

### Junior Software Developer | Aug 2025 - Dec 2025
Goeasytrip (Remote, Singapore)
- Built Spring Boot REST APIs for user accounts, bookings, and other core flows of a travel booking platform.
- Integrated Amadeus SOAP APIs for flight search, pricing, and availability, handling the XML request and response flow.
- Tested APIs in Postman, reproduced reported bugs, and shipped fixes with regression checks.
- Deployed the application on IONOS, set up domain routing and environment configs, and handled routine maintenance.

### Web Development Intern | Apr 2025 - Jun 2025
Growth Spell Software Solution (Remote, Dubai, UAE)
- Customized and maintained WordPress sites with themes, plugins, and Elementor.
- Fixed layout, plugin, and speed issues with JavaScript and CSS updates.

## Projects

### BillingPro: GST billing and inventory software (desktop app)
Electron, React, TypeScript, SQLite
- Built a GST-compliant desktop billing app for Indian retail with per-line GST (CGST and SGST, or IGST), discounts, invoice numbering, and barcode or SKU search.
- Linked billing to inventory: every sale deducts stock and writes a stock log, and the dashboard shows stock value and low-stock alerts.
- Added admin and biller roles with bcrypt-hashed passwords, plus monthly sales and GST reports with PDF export.
- Fixed a month-end date bug that hid the last day of each month from reports.

### Multi-Vendor Grocery Marketplace | GitHub: github.com/hameed2k3/Grocery
React, Node.js, Express.js, MongoDB, JWT, Google OAuth 2.0, Vercel and Render
- Built a marketplace where several stores sell on one platform, each with its own catalog, stock, and orders in a vendor dashboard.
- Added Google OAuth 2.0 and JWT login with separate access for customers, vendors, and admins.
- Wrote a bulk Excel/CSV upload that updates stock and price by SKU, with per-store ownership checks and row-level errors.
- Added ZIP image upload that matches product photos to inventory by SKU file name.
- Captured delivery location at checkout using browser geolocation and OpenStreetMap address lookup.

### AI-Integrated Online Voting System | Apr 2025
AI, Blockchain, Facial Recognition, OTP Verification
- Built a remote voting platform that checks each voter with face recognition, OTP, and voter ID before a vote can be cast.
- Stored votes on a blockchain so submitted results cannot be quietly changed.
- Published the work as a research paper in the International Journal of Research Publication and Review (IJRPR).

## Education
B.Tech in Information Technology, Anna University, Chennai | Sept 2021 - June 2025 | CGPA 8.4

## Certifications
Python Programming (GUVI) | Cybersecurity Fundamentals (IBM) | Beginner Ethical Hacking (Skill Up)

## Achievements
First place in Paper Presentation at SIT-SCIHUM-22 (June 2022).

## Needs your input
1. Email: the resume says `abdulhameedabdulathif@gmail.com`, the portfolio contact section says `abdulhameedabdullathif@gmail.com`. One has a typo.
2. LinkedIn: the resume links `linkedin.com/in/adhameed2k3`, the portfolio links `linkedin.com/in/abdul-hameed-abdul-lathif-567064250`. Pick one.
3. Company name: "Enarxi India" (resume) vs "Enarxi Innovation Private Limited" (portfolio). This file uses the full name.
4. Marketplace live demo: the resume links `grocery-two-wine.vercel.app`, which returned 404. The portfolio links `grocery-web-naanmuthalvan.vercel.app`, which works. Confirm which one shows the multi-vendor version.
5. Numbers: add at least one measurable result per role (services run, releases shipped, users or vendors supported).
7. TypeScript, Next.js, and SQLite were added to the skills because they appear in your projects. Remove any you do not want to claim.
8. Bullets: use a standard "•" character when exporting the PDF. The current PDF extracts the bullets as unreadable symbols, which can confuse applicant-tracking systems.
