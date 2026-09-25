import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | [Clinic Name]',
  description: 'Privacy Policy and data collection practices for [Clinic Name].'
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.container}>
      <div className={styles.warningBanner}>
        This is a website template. This privacy policy is a placeholder and must be reviewed and completed by qualified legal counsel before use in a real clinic.
      </div>

      <header className={styles.pageHeader}>
        <h1>Privacy Policy</h1>
      </header>

      <section className={styles.section}>
        <h2>Introduction</h2>
        <p>[Placeholder &mdash; brief intro about commitment to privacy]</p>
        <p>Last updated: [Date Placeholder]</p>
      </section>

      <section className={styles.section}>
        <h2>Information We Collect</h2>
        <p>[Placeholder &mdash; types of information collected, e.g. contact details, appointment requests]</p>
        <p><em>Note: This template does not collect or store real patient data.</em></p>
      </section>

      <section className={styles.section}>
        <h2>How We Use Your Information</h2>
        <p>[Placeholder &mdash; purposes of data use]</p>
      </section>

      <section className={styles.section}>
        <h2>Data Storage and Security</h2>
        <p>[Placeholder &mdash; security measures, storage location]</p>
        <p>[Compliance with applicable Indian data protection laws &mdash; to be confirmed with legal counsel]</p>
      </section>

      <section className={styles.section}>
        <h2>Sharing Your Information</h2>
        <p>[Placeholder &mdash; third party sharing policy]</p>
      </section>

      <section className={styles.section}>
        <h2>Your Rights</h2>
        <p>[Placeholder &mdash; patient rights regarding their data]</p>
        <p>[Rights under applicable Indian regulations &mdash; to be confirmed]</p>
      </section>

      <section className={styles.section}>
        <h2>Cookies</h2>
        <p>[Placeholder &mdash; cookie usage policy]</p>
      </section>

      <section className={styles.section}>
        <h2>Contact for Privacy Concerns</h2>
        <p>If you have any questions or concerns about this Privacy Policy, please contact us.</p>
        <p><Link href="/location-contact">Visit our Contact Page</Link></p>
      </section>

      <section className={styles.section}>
        <h2>Changes to This Policy</h2>
        <p>[Placeholder]</p>
      </section>
    </div>
  );
}
