"use client"

import { ArrowRight, ArrowDown } from "lucide-react"
import SectionReveal from "@/components/common/section-reveal"
import { CodeWindow } from "@/components/common/code-window"

const flow = [
  { name: "Browser", detail: "https request" },
  { name: "nginx", detail: "TLS, gzip, caching, reverse proxy" },
  { name: "PM2", detail: "keeps the app alive, cluster mode" },
  { name: "Next.js", detail: "node app on :3000" },
]

const pm2Config = `module.exports = {
  apps: [
    {
      name: "portfolio",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      instances: "max",
      exec_mode: "cluster",
      max_memory_restart: "300M",
      env: { NODE_ENV: "production" },
    },
  ],
}`

const nginxConfig = `server {
  listen 80;
  server_name example.com;
  return 301 https://$host$request_uri;
}

server {
  listen 443 ssl;
  http2 on;
  server_name example.com;

  ssl_certificate     /etc/letsencrypt/live/example.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
  gzip on;

  location /_next/static/ {
    proxy_pass http://127.0.0.1:3000;
    add_header Cache-Control "public, max-age=31536000, immutable";
  }

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}`

const verify = `$ pm2 status
┌────┬───────────┬─────────┬────────┬────────┐
│ id │ name      │ mode    │ status │ uptime │
├────┼───────────┼─────────┼────────┼────────┤
│ 0  │ portfolio │ cluster │ online │ 3d     │
│ 1  │ portfolio │ cluster │ online │ 3d     │
└────┴───────────┴─────────┴────────┴────────┘

$ sudo nginx -t
nginx: configuration file test is successful

$ pm2 reload ecosystem.config.js
[PM2] Applying action reloadProcessId on app [portfolio]

$ curl -I https://example.com
HTTP/2 200`

const points = [
  {
    title: "Process management",
    text: "PM2 runs the app in cluster mode, restarts it on a crash or a memory limit, and starts it again after a reboot. Reloads are zero-downtime.",
  },
  {
    title: "Reverse proxy",
    text: "nginx terminates HTTPS, redirects HTTP, compresses responses, caches static assets for a year, and forwards the client IP to the app.",
  },
  {
    title: "Release flow",
    text: "Pull, install, build, then pm2 reload. If the build fails, the running version keeps serving traffic.",
  },
]

export default function Deployment() {
  return (
    <section id="deployment" className="border-t border-border py-20 md:py-28">
      <div className="container">
        <SectionReveal className="mb-12 max-w-2xl">
          <p className="eyebrow">03 deployment</p>
          <h2 className="section-title mt-3">
            How I run apps on a server<span className="text-primary">.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            At Enarxi I deploy releases to DigitalOcean VPS servers, run backend services under PM2, and route traffic with nginx and SSL from Certbot.
          </p>
        </SectionReveal>

        <SectionReveal>
          <ol className="flex flex-col items-stretch gap-2 md:flex-row md:items-center">
            {flow.map((step, index) => (
              <li key={step.name} className="flex flex-1 flex-col items-center gap-2 md:flex-row">
                <div className="w-full flex-1 rounded-lg border border-border bg-card p-4">
                  <p className="font-mono text-sm font-medium text-primary">{step.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{step.detail}</p>
                </div>
                {index < flow.length - 1 && (
                  <>
                    <ArrowRight aria-hidden="true" className="hidden h-4 w-4 shrink-0 text-muted-foreground md:block" />
                    <ArrowDown aria-hidden="true" className="h-4 w-4 shrink-0 text-muted-foreground md:hidden" />
                  </>
                )}
              </li>
            ))}
          </ol>
        </SectionReveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <SectionReveal>
            <CodeWindow title="ecosystem.config.js" className="h-full">
              <pre className="overflow-x-auto p-5 font-mono text-xs leading-6 text-foreground">{pm2Config}</pre>
            </CodeWindow>
          </SectionReveal>
          <SectionReveal delay={0.08}>
            <CodeWindow title="/etc/nginx/sites-available/portfolio" className="h-full">
              <pre className="overflow-x-auto p-5 font-mono text-xs leading-6 text-foreground">{nginxConfig}</pre>
            </CodeWindow>
          </SectionReveal>
        </div>

        <SectionReveal className="mt-6">
          <CodeWindow title="verify · example output">
            <pre className="overflow-x-auto p-5 font-mono text-xs leading-6 text-muted-foreground">{verify}</pre>
          </CodeWindow>
        </SectionReveal>

        <ul className="mt-10 grid gap-8 md:grid-cols-3">
          {points.map((point, index) => (
            <li key={point.title}>
              <SectionReveal delay={index * 0.06}>
                <p className="font-mono text-xs text-primary">0{index + 1}</p>
                <h3 className="mt-1 text-lg font-semibold">{point.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{point.text}</p>
              </SectionReveal>
            </li>
          ))}
        </ul>

        <p className="mt-10 font-mono text-xs text-muted-foreground">
          Configuration shown with a placeholder domain. This portfolio itself is deployed on Vercel.
        </p>
      </div>
    </section>
  )
}
