import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Rate limiting: simple in-memory store (resets on server restart)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS = 3 // Max 3 requests per minute per IP

function isRateLimited(ip: string): boolean {
    const now = Date.now()
    const record = rateLimitMap.get(ip)

    if (!record) {
        rateLimitMap.set(ip, { count: 1, timestamp: now })
        return false
    }

    if (now - record.timestamp > RATE_LIMIT_WINDOW) {
        rateLimitMap.set(ip, { count: 1, timestamp: now })
        return false
    }

    if (record.count >= MAX_REQUESTS) {
        return true
    }

    record.count++
    return false
}

// Input sanitization
function sanitizeInput(input: string): string {
    return input
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#x27;")
        .trim()
}

export async function POST(request: NextRequest) {
    try {
        // Get client IP for rate limiting
        const ip =
            request.headers.get("x-forwarded-for")?.split(",")[0] ||
            request.headers.get("x-real-ip") ||
            "unknown"

        // Check rate limit
        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: "Too many requests. Please try again later." },
                { status: 429 }
            )
        }

        const body = await request.json()
        const { name, email, subject, message } = body

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            )
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Invalid email format" },
                { status: 400 }
            )
        }

        // Validate minimum lengths
        if (name.length < 2 || subject.length < 5 || message.length < 10) {
            return NextResponse.json(
                { error: "Please provide more details in your message" },
                { status: 400 }
            )
        }

        // Sanitize inputs
        const sanitizedName = sanitizeInput(name)
        const sanitizedSubject = sanitizeInput(subject)
        const sanitizedMessage = sanitizeInput(message)

        // Check if environment variables are set
        if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
            console.error("Email configuration missing")
            return NextResponse.json(
                { error: "Email service not configured" },
                { status: 500 }
            )
        }

        // Create transporter (using Gmail)
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_APP_PASSWORD,
            },
        })

        // Email content
        const mailOptions = {
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER,
            replyTo: email,
            subject: `🚀 Portfolio Contact: ${sanitizedSubject}`,
            html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #7c3aed, #3b82f6); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #7c3aed; }
            .message-box { background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #7c3aed; margin-top: 15px; }
            .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #6b7280; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">📬 New Contact Form Submission</h2>
              <p style="margin: 5px 0 0 0; opacity: 0.9;">From your portfolio website</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">👤 Name:</span>
                <p style="margin: 5px 0;">${sanitizedName}</p>
              </div>
              <div class="field">
                <span class="label">📧 Email:</span>
                <p style="margin: 5px 0;"><a href="mailto:${email}">${email}</a></p>
              </div>
              <div class="field">
                <span class="label">📝 Subject:</span>
                <p style="margin: 5px 0;">${sanitizedSubject}</p>
              </div>
              <div class="message-box">
                <span class="label">💬 Message:</span>
                <p style="margin: 10px 0 0 0; white-space: pre-wrap;">${sanitizedMessage}</p>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from your portfolio contact form.</p>
              <p>Reply directly to this email to respond to ${sanitizedName}.</p>
            </div>
          </div>
        </body>
        </html>
      `,
            text: `
New Contact Form Submission

Name: ${sanitizedName}
Email: ${email}
Subject: ${sanitizedSubject}

Message:
${sanitizedMessage}

---
This email was sent from your portfolio contact form.
Reply directly to this email to respond to ${sanitizedName}.
      `,
        }

        // Send email
        await transporter.sendMail(mailOptions)

        return NextResponse.json({
            success: true,
            message: "Email sent successfully",
        })
    } catch (error) {
        console.error("Email send error:", error)
        return NextResponse.json(
            { error: "Failed to send email. Please try again later." },
            { status: 500 }
        )
    }
}
