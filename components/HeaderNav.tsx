import React from 'react';
import Link from 'next/link';

export function HeaderNav() {
  return (
    <header className="header-nav">
      <nav aria-label="Main Navigation">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/doctors">Find a Doctor</Link></li>
          <li><Link href="/appointments/book">Book Appointment</Link></li>
          <li><Link href="/location-contact">Location &amp; Contact</Link></li>
          <li><Link href="/faq">FAQ</Link></li>
        </ul>
      </nav>
    </header>
  );
}
