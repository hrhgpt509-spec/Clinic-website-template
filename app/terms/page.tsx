import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Terms of Use | [Clinic Name]',
  description: 'Terms of Use for the [Clinic Name] website.'
};

export default function TermsOfUsePage() {
  return (
    <div className={styles.container}>
      <div className={styles.warningBanner}>
        This is a website template. This terms of use is a placeholder and must be reviewed and completed by qualified legal counsel before use in a real clinic.
      </div>

      <header className={styles.pageHeader}>
        <h1>Terms of Use</h1>
      </header>

      <section className={styles.section}>
        <h2>Acceptance of Terms</h2>
        <p>[Placeholder]</p>
      </section>

      <section className={styles.section}>
        <h2>Use of This Website</h2>
        <p>[Placeholder &mdash; permitted and prohibited uses]</p>
      </section>

      <section className={styles.section}>
        <h2>Medical Disclaimer</h2>
        <p>The information on this website is for general informational purposes only and does not constitute medical advice. Always consult a qualified healthcare professional for medical decisions.</p>
      </section>

      <section className={styles.section}>
        <h2>Appointment Requests</h2>
        <p>[Placeholder &mdash; nature of the online booking form, not a guaranteed appointment]</p>
      </section>

      <section className={styles.section}>
        <h2>Intellectual Property</h2>
        <p>[Placeholder]</p>
      </section>

      <section className={styles.section}>
        <h2>Limitation of Liability</h2>
        <p>[Placeholder]</p>
      </section>

      <section className={styles.section}>
        <h2>Governing Law</h2>
        <p>[Placeholder &mdash; Indian jurisdiction note]</p>
      </section>

      <section className={styles.section}>
        <h2>Contact</h2>
        <p>If you have any questions about these Terms of Use, please contact us.</p>
        <p><Link href="/location-contact">Visit our Contact Page</Link></p>
      </section>
    </div>
  );
}
