import type { Metadata } from "next";
// Font: system stack in use — add next/font/google here for custom fonts
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { EmergencyBanner } from "@/components/EmergencyBanner";
import { HeaderNav } from "@/components/HeaderNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | [Clinic Name]',
    default: '[Clinic Name]',
  },
  description: '[Clinic Name] &mdash; placeholder description for SEO',
  metadataBase: new URL('https://example-clinic.com'),
  openGraph: {
    type: 'website',
    siteName: '[Clinic Name]',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <EmergencyBanner />
        <HeaderNav />
        <main id="main-content" className="main-content">
          {children}
        </main>
        <footer className="site-footer">
          <p>&copy; 2026 Hospital Name. All rights reserved.</p>
          <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
            <Link href="/privacy" style={{ color: 'inherit', textDecoration: 'underline', marginRight: '1rem' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: 'inherit', textDecoration: 'underline' }}>Terms of Use</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
