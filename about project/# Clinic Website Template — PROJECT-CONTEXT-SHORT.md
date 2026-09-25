# Clinic Website Template — Quick Context

## What This Is
A professional clinic website template built with Next.js 15 App Router and TypeScript.
It is a UI template only. No real backend, no real patient data, no real clinic information.
All placeholder content is marked with [bracket notation].

## Tech Stack
- Next.js 15 (App Router)
- TypeScript
- CSS Modules (no Tailwind — it is in devDependencies but unused and should be removed)
- No external UI libraries

## Pages and Routes
| Route | File | Type |
|---|---|---|
| / | app/page.tsx | Server Component |
| /about | app/about/page.tsx | Server Component |
| /services | app/services/page.tsx | Server Component |
| /services/[id] | app/services/[id]/page.tsx | Server Component |
| /doctors | app/doctors/page.tsx | Client Component |
| /doctors/[id] | app/doctors/[id]/page.tsx | Server Component |
| /appointments/book | app/appointments/book/page.tsx | Server + Client |
| /location-contact | app/location-contact/page.tsx | Server + Client |
| /faq | app/faq/page.tsx | Server Component |
| /privacy | app/privacy/page.tsx | Server Component |
| /terms | app/terms/page.tsx | Server Component |
| 404 | app/not-found.tsx | Server Component |
| Error | app/error.tsx | Client Component |

## Key Files
- app/globals.css — design tokens, CSS custom properties, spacing, typography, colors
- lib/mockData.ts — all mock doctors and departments data
- components/HeaderNav.tsx — main navigation (7 links)
- components/EmergencyBanner.tsx — emergency info banner
- app/layout.tsx — root layout, metadata, header, footer, skip link
- app/sitemap.ts — dynamic sitemap generation
- public/robots.txt — search crawler config
- HANDOFF.md — full handoff checklist for production

## Architecture Rules — Do Not Break These
1. Use CSS Modules only. No Tailwind. No inline styles unless absolutely necessary.
2. Use existing CSS custom properties from globals.css for all colors, spacing, and typography.
3. Server Components by default. Only use 'use client' when the component needs useState, useEffect, useSearchParams, or event handlers.
4. All interactive elements must meet 44px minimum touch target.
5. Never present placeholder content as real information.

## Placeholder Convention
All placeholder content uses [bracket notation] like:
- [Clinic Name]
- [Phone Placeholder]
- [Street Address Placeholder]
Do not remove brackets unless replacing with real content.

## Mock Data
All doctor and department data lives in lib/mockData.ts.
To change doctors or departments, edit that file.
Functions: fetchDoctors(), fetchDepartments()
Types: Doctor, Department, AppointmentRequest

## Forms
Two template forms exist:
- app/appointments/book/BookForm.tsx — appointment request
- app/location-contact/ContactForm.tsx — contact form
Both are Client Components. Both show a disclaimer that no real data is submitted.

## CSS Module Files
Each page has its own CSS module:
- app/home.module.css
- app/about/about.module.css
- app/services/services.module.css
- app/services/[id]/department.module.css
- app/doctors/doctors.module.css
- app/doctors/[id]/profile.module.css
- app/appointments/book/book.module.css
- app/location-contact/location.module.css
- app/faq/faq.module.css
- app/legal.module.css (shared by /privacy and /terms)
- app/not-found.module.css (shared by 404 and error pages)

---
The user will now describe the change they want.
Inspect the relevant files before making any changes.
Preserve all working functionality.
Do not rewrite unrelated files.
Report what you changed when done.