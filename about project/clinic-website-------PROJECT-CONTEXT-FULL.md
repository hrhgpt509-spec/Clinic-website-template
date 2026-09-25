
## Design System
All design tokens live in app/globals.css as CSS custom properties.

### Colors
- --color-primary — main brand color
- --color-primary-dark — darker brand variant
- --color-primary-light — lighter brand variant
- --color-emergency — emergency/urgent color
- --color-text-primary — main body text
- --color-text-secondary — secondary text
- --color-background — page background
- --color-surface — card/panel background
- --color-border — border color

### Spacing
- --space-xs, --space-sm, --space-md, --space-lg, --space-xl, --space-2xl

### Typography
- --font-family-base — system font stack
- --font-size-sm, --font-size-base, --font-size-lg, --font-size-xl, --font-size-2xl, --font-size-3xl
- --font-weight-normal, --font-weight-medium, --font-weight-bold
- --line-height-tight, --line-height-base, --line-height-relaxed

### Accessibility Tokens
- --touch-target-min — 44px minimum for all interactive elements
- --focus-ring — 3px visible focus ring applied globally via :focus-visible

## Accessibility Rules — Must Be Preserved
- WCAG 2.2 AA target throughout
- All interactive elements use :focus-visible focus states
- All interactive elements meet --touch-target-min (44px)
- All form inputs have associated label elements
- Required fields use aria-required="true"
- Inline errors use aria-describedby linking input to error message
- Success states use role="alert" or aria-live="polite"
- Heading hierarchy must not skip levels (h1 → h2 → h3)
- All images have meaningful alt text or alt="" if decorative
- Skip to main content link exists in layout.tsx
- Semantic HTML elements used throughout (nav, main, section, aside, header, footer)

## Server vs Client Components
Default is Server Component.
Use Client Component only when the file needs:
- useState
- useEffect
- useSearchParams
- User event handlers (onClick, onChange, onSubmit)

Current Client Components and why:
- app/doctors/page.tsx — search state, filter state, useEffect for data fetch
- app/appointments/book/BookForm.tsx — form state, validation, useSearchParams
- app/location-contact/ContactForm.tsx — form state and validation
- app/error.tsx — required by Next.js for error boundaries

## Mock Data
File: lib/mockData.ts
Functions: fetchDoctors(), fetchDepartments()
Both functions simulate network latency with setTimeout.

### Doctor type fields
- id, name, specialty, department, imageUrl, location
- isAcceptingNewPatients (boolean)
- Optional: qualifications, areasOfPractice, experience

### Department type fields
- id, name, description
- Optional: treatments, facilities, doctors (id references)

To update mock data: edit lib/mockData.ts directly.
In production: replace fetch functions with real API calls.
The rest of the UI does not need to change if the data shape is preserved.

## Navigation
File: components/HeaderNav.tsx
Current links in order:
1. Home — /
2. About Us — /about
3. Services — /services
4. Doctors — /doctors
5. Book Appointment — /appointments/book
6. Location & Contact — /location-contact
7. FAQ — /faq

Footer links (in app/layout.tsx):
- Privacy Policy — /privacy
- Terms of Use — /terms

## SEO Infrastructure
- app/layout.tsx — root metadata with title template
- Title template: '%s | [Clinic Name]' — child pages set their own title segment
- app/sitemap.ts — generates sitemap dynamically from static routes and mock data
- public/robots.txt — allows all crawlers, points to sitemap
- app/opengraph-image.tsx — generates OG image via Next.js ImageResponse
- app/page.tsx — contains MedicalOrganization JSON-LD structured data
- Placeholder domain: example-clinic.com — must be replaced before launch

## Forms
### Appointment Form
- Route: /appointments/book
- Server Component: app/appointments/book/page.tsx (metadata only)
- Client Component: app/appointments/book/BookForm.tsx (all logic)
- Pre-fills doctor from ?doctorId= URL param
- Pre-fills department from ?departmentId= URL param
- Validation: inline errors on submit with aria-describedby
- Success: shows disclaimer that no real appointment was booked
- No backend connection

### Contact Form
- Route: /location-contact
- Server Component: app/location-contact/page.tsx (static sections)
- Client Component: app/location-contact/ContactForm.tsx (form logic)
- Validation: inline errors on submit
- Success: shows disclaimer that no real message was sent
- No backend connection

## What Is Intentionally Not Built
These are future integration points, not missing features:
- Real appointment scheduling backend
- Real contact form backend
- Patient portal
- Staff or admin portal
- Authentication
- Database
- CMS
- Real map integration (placeholder div exists on contact page)
- Payment processing
- Insurance processing
- EHR integration
- ABDM integration
- Push notifications
- SMS notifications

## Known Issues and Cleanup Items
- tailwindcss and @tailwindcss/postcss are in devDependencies but unused — safe to remove
- All next/image instances use unoptimized prop because mock image URLs are external — remove this prop when using real hosted images
- Placeholder domain example-clinic.com must be replaced in: sitemap.ts, robots.txt, layout.tsx, page.tsx structured data

## CSS Module Rules
- Every selector must contain at least one local class
- Bare element selectors like section h2 are not allowed — must be scoped: .section h2
- All color, spacing, and typography values must use CSS custom properties from globals.css
- No hardcoded color values
- No inline styles unless no alternative exists

## Template Content Rules
- Never present placeholder content as real
- All placeholders use [bracket notation]
- Medical disclaimer on terms page is real text — do not replace with placeholder
- Form disclaimers are real text — do not remove them

---
The user will now describe the change they want.
Read PROJECT-CONTEXT-SHORT.md if you need a quick reference.
Inspect the relevant files before making any changes.
Preserve all working functionality.
Do not rewrite unrelated files.
Use existing CSS custom properties for any new styles.
Follow the Server vs Client Component rules above.
Report what you changed when done.