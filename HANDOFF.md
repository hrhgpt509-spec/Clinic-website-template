# Clinic Website Template — Handoff Document

## Project Overview
This project is a high-performance, accessible, and responsive website template designed specifically for hospitals and clinics. It provides a solid foundation for building a comprehensive medical facility website, featuring essential pages like a doctor directory, services overview, and appointment booking form. It is a front-end template with mock data, ready to be connected to a real backend.

## Tech Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS with CSS Modules and CSS Variables
- **Icons/Fonts**: `next/font/google` (Geist / system font fallback)
- **Data Management**: Mock data functions (`lib/mockData.ts`)

## Pages Included
| Route | Description |
|---|---|
| `/` | The homepage with hero section, emergency contact, and quick links. |
| `/about` | Information about the clinic, its history, and mission. |
| `/services` | A directory of all medical departments and services offered. |
| `/services/[id]` | Dynamic page detailing a specific medical department. |
| `/doctors` | A searchable and filterable directory of physicians. |
| `/appointments/book` | A form for patients to request an appointment. |
| `/location-contact` | Contact information, map placeholder, and a contact form. |
| `/faq` | Frequently Asked Questions for patients. |
| `/privacy` | Privacy Policy (requires legal review). |
| `/terms` | Terms of Use (requires legal review). |

## Placeholder Content Checklist
Before launching, the real clinic must replace the following placeholders, grouped by file:

### `app/layout.tsx` & `app/opengraph-image.tsx`
- `[Clinic Name]` (SEO title, description, OpenGraph text)

### `app/page.tsx`
- `[Clinic Name]` (Hero title, address block, structured data)
- `[Phone Placeholder]` (Structured data)
- `[Street Address Placeholder]` (Address block, structured data)
- `[City Placeholder]` (Structured data)
- `[State Placeholder]` (Structured data)
- `[Zip Placeholder]` (Structured data)
- `[Country Placeholder]` (Structured data)
- `[Emergency Number Placeholder]` (Emergency section)
- `[City, State, Zip Placeholder]` (Address block)
- `[Hours Placeholder]` (Address block, structured data)

### `app/services/page.tsx`
- `[Clinic Name]` (SEO metadata)

### `app/services/[id]/page.tsx`
- `[Clinic Name]` (SEO metadata)
- `[Placeholder Content] Details regarding specific treatments...`
- `[Placeholder: Treatment / Procedure A/B/C]`
- `[Placeholder Content] Information about the state-of-the-art medical equipment...`
- `[Placeholder: Main Hospital, Floor X]` (Location)

### `app/privacy/page.tsx`
- `[Clinic Name]` (SEO metadata)
- `[Date Placeholder]`
- `[Placeholder — brief intro about commitment to privacy]`
- `[Placeholder — types of information collected...]`
- `[Placeholder — purposes of data use]`
- `[Placeholder — security measures, storage location]`
- `[Compliance with applicable Indian data protection laws — to be confirmed with legal counsel]`
- `[Placeholder — third party sharing policy]`
- `[Placeholder — patient rights regarding their data]`
- `[Rights under applicable Indian regulations — to be confirmed]`
- `[Placeholder — cookie usage policy]`

### `app/terms/page.tsx`
- `[Clinic Name]` (SEO metadata)
- `[Placeholder — permitted and prohibited uses]`
- `[Placeholder — nature of the online booking form...]`
- `[Placeholder — Indian jurisdiction note]`
- Miscellaneous `[Placeholder]` tags for content blocks.

## Before Launch Checklist
- [ ] Replace all placeholder content listed above.
- [ ] Legal review of privacy and terms pages.
- [ ] Replace `example-clinic.com` with real domain in:
  - `app/sitemap.ts`
  - `public/robots.txt`
  - `app/layout.tsx` (metadataBase)
  - `app/page.tsx` (structured data)
- [ ] Remove `tailwindcss` and `@tailwindcss/postcss` from devDependencies in `package.json`.
- [ ] Replace mock data in `lib/mockData.ts` with real clinic data.
- [ ] Remove `unoptimized` prop from `next/image` components when using real optimized images.
- [ ] Add real map embed to contact page.
- [ ] Connect real backend to appointment form.
- [ ] Connect real backend to contact form.
- [ ] Legal and compliance review for India (DPDP Act 2023).
- [ ] Accessibility audit with real content in place.

## Future Integration Points
- **Doctor & Department Data**: `lib/mockData.ts` should be replaced with fetch calls to a real CMS or relational database.
- **Appointment Booking**: `app/appointments/book/BookForm.tsx` currently only simulates a submission. It needs to be connected to a scheduling API or EHR system.
- **Contact Form**: `app/location-contact/ContactForm.tsx` needs a backend API route (e.g., Next.js Server Action or API Route) to send emails or store messages.

## Architecture Notes
- The template uses **Next.js App Router** with React Server Components by default for superior performance.
- Interactivity (forms, filtering) is strictly isolated to Client Components designated by `"use client"`.
- Styling is handled natively via **CSS Modules** (`*.module.css`) and global variables (`globals.css`) for high performance and zero-runtime overhead. Tailwind CSS dependencies are present but unused and can be safely removed.
- **SEO & Accessibility** are prioritized with semantic HTML, ARIA attributes, structured data snippets, and dynamic metadata generation.

## Known Issues
This template is intentionally provided as a front-end foundation. It does **not** include:
- Real appointment backend or EHR integration
- Real contact form backend (emails are not sent)
- Authentication or a patient portal
- CMS for managing doctors, services, or pages
- Real interactive map integration (currently a placeholder or missing)
- Payment processing or billing interfaces
