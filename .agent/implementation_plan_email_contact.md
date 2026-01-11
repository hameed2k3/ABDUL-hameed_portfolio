# Implementation Plan: Contact Form Email Integration

## Overview
This plan outlines two approaches to receive emails directly when someone submits the "Get in Touch" form on your portfolio:

1. **Option A: Next.js API Route (Recommended)** - Simpler, stays within your current stack
2. **Option B: Separate NestJS Backend** - More complex, but provides a dedicated email service

---

## Option A: Next.js API Route (Recommended)

### Benefits
- No additional server required
- Uses existing Next.js infrastructure
- Faster to implement
- Can be deployed on Vercel/similar platforms

### Steps

#### Step 1: Install Nodemailer
```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

#### Step 2: Create API Route
Create file: `app/api/contact/route.ts`

```typescript
import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Create transporter (using Gmail as example)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD, // Use App Password, not regular password
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "abdulhameedabdullathif@gmail.com", // Your email
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Email sent successfully" })
  } catch (error) {
    console.error("Email send error:", error)
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}
```

#### Step 3: Create Environment Variables
Create/update `.env.local`:

```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_APP_PASSWORD=your-gmail-app-password
```

**Note:** For Gmail, you need to:
1. Enable 2-Factor Authentication
2. Generate an App Password at: https://myaccount.google.com/apppasswords

#### Step 4: Update Contact Form Component
Modify `components/contact.tsx` to use the new API:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  setSubmitError(null)

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    const data = await response.json()

    if (response.ok) {
      setIsSubmitting(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 5000)
    } else {
      throw new Error(data.error || "Form submission failed")
    }
  } catch (error) {
    console.error("Form submission error:", error)
    setIsSubmitting(false)
    setSubmitError(
      "Failed to send message. Please try again or email me directly at abdulhameedabdullathif@gmail.com"
    )
  }
}
```

---

## Option B: Separate NestJS Backend

### Benefits
- Dedicated email microservice
- Can handle multiple projects
- Better for complex email workflows (queues, templates, etc.)
- Scalable architecture

### Architecture
```
Portfolio (Next.js) --> NestJS API --> Email Service (Gmail/SendGrid/etc.)
     |                      |
     |                      +-- /api/contact (POST)
     +-- calls API
```

### Steps

#### Step 1: Create NestJS Project
```bash
# Create new NestJS project (in a separate folder)
npx @nestjs/cli new portfolio-email-service
cd portfolio-email-service
```

#### Step 2: Install Dependencies
```bash
npm install @nestjs-modules/mailer nodemailer
npm install --save-dev @types/nodemailer
npm install class-validator class-transformer
npm install @nestjs/config
```

#### Step 3: Create Mail Module
Create `src/mail/mail.module.ts`:

```typescript
import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        transport: {
          service: 'gmail',
          auth: {
            user: config.get('EMAIL_USER'),
            pass: config.get('EMAIL_APP_PASSWORD'),
          },
        },
        defaults: {
          from: `"Portfolio Contact" <${config.get('EMAIL_USER')}>`,
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [MailController],
  providers: [MailService],
})
export class MailModule {}
```

#### Step 4: Create Contact DTO
Create `src/mail/dto/contact.dto.ts`:

```typescript
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class ContactDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  subject: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  message: string;
}
```

#### Step 5: Create Mail Service
Create `src/mail/mail.service.ts`:

```typescript
import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ContactDto } from './dto/contact.dto';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendContactEmail(contactDto: ContactDto): Promise<void> {
    const { name, email, subject, message } = contactDto;

    await this.mailerService.sendMail({
      to: 'abdulhameedabdullathif@gmail.com',
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    });
  }
}
```

#### Step 6: Create Mail Controller
Create `src/mail/mail.controller.ts`:

```typescript
import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { MailService } from './mail.service';
import { ContactDto } from './dto/contact.dto';

@Controller('api/contact')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async sendContactEmail(@Body() contactDto: ContactDto) {
    await this.mailService.sendContactEmail(contactDto);
    return { success: true, message: 'Email sent successfully' };
  }
}
```

#### Step 7: Update App Module
Update `src/app.module.ts`:

```typescript
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MailModule,
  ],
})
export class AppModule {}
```

#### Step 8: Enable CORS
Update `src/main.ts`:

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: ['https://your-portfolio-domain.com', 'http://localhost:3000'],
    methods: ['POST'],
    credentials: true,
  });
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
  }));
  
  await app.listen(3001);
}
bootstrap();
```

#### Step 9: Create Environment File
Create `.env`:

```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_APP_PASSWORD=your-gmail-app-password
```

#### Step 10: Update Portfolio Contact Form
Update your Next.js portfolio to call the NestJS API:

```typescript
const response = await fetch("https://your-nestjs-api.com/api/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
})
```

---

## Deployment Options

### Option A (Next.js API Route)
- **Vercel**: Works out of the box
- **Netlify**: Requires serverless functions
- **Self-hosted**: Standard Next.js deployment

### Option B (NestJS Backend)
- **Railway**: Easy Node.js hosting
- **Render**: Free tier available
- **DigitalOcean App Platform**: Scalable
- **AWS EC2/ECS**: Enterprise-grade
- **Docker + VPS**: Full control

---

## Recommended Approach

For a portfolio website, **Option A (Next.js API Route)** is recommended because:
1. Simpler architecture (single deployment)
2. No additional hosting costs
3. Faster implementation
4. Easier maintenance
5. Already integrated with your existing stack

Use **Option B (NestJS)** if you plan to:
- Add email queuing/retry logic
- Use the email service for multiple projects
- Implement complex email templates
- Add webhook integrations

---

## Security Considerations

1. **Rate Limiting**: Add rate limiting to prevent spam
2. **CAPTCHA**: Consider adding reCAPTCHA or hCaptcha
3. **Input Sanitization**: Always sanitize user input
4. **Environment Variables**: Never commit credentials to git
5. **HTTPS**: Always use HTTPS in production
