import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './faq.module.css';

export const metadata: Metadata = {
  title: 'FAQ | [Clinic Name]',
  description: 'Frequently asked questions about appointments, services, and visiting [Clinic Name].'
};

export default function FAQPage() {
  return (
    <div className={styles.container}>
      <header className={styles.pageHeader}>
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our services, appointments, and facilities.</p>
      </header>

      <section className={styles.faqSection} aria-labelledby="appointments-title">
        <h2 id="appointments-title" className={styles.categoryTitle}>Appointments</h2>
        <div className={styles.questionList}>
          <article className={styles.qaPair}>
            <h3>How do I book an appointment?</h3>
            <p>[Placeholder &mdash; describe booking process steps here]</p>
          </article>
          <article className={styles.qaPair}>
            <h3>Can I book an appointment online?</h3>
            <p>[Placeholder &mdash; online booking availability to be confirmed]</p>
          </article>
          <article className={styles.qaPair}>
            <h3>What should I bring to my first appointment?</h3>
            <p>[Placeholder &mdash; list documents, ID, insurance card etc]</p>
          </article>
          <article className={styles.qaPair}>
            <h3>How do I cancel or reschedule?</h3>
            <p>[Placeholder &mdash; cancellation policy details here]</p>
          </article>
        </div>
      </section>

      <section className={styles.faqSection} aria-labelledby="services-title">
        <h2 id="services-title" className={styles.categoryTitle}>Services &amp; Departments</h2>
        <div className={styles.questionList}>
          <article className={styles.qaPair}>
            <h3>What specialties are available at [Clinic Name]?</h3>
            <p>[Placeholder &mdash; list departments or <Link href="/services">link to services page</Link>]</p>
          </article>
          <article className={styles.qaPair}>
            <h3>Do you offer emergency services?</h3>
            <p>[Placeholder &mdash; emergency availability details here]</p>
          </article>
        </div>
      </section>

      <section className={styles.faqSection} aria-labelledby="general-title">
        <h2 id="general-title" className={styles.categoryTitle}>General</h2>
        <div className={styles.questionList}>
          <article className={styles.qaPair}>
            <h3>Where are you located?</h3>
            <p>[Placeholder &mdash; address and directions, <Link href="/location-contact">link to Location &amp; Contact</Link>]</p>
          </article>
          <article className={styles.qaPair}>
            <h3>What are your opening hours?</h3>
            <p>[Placeholder &mdash; hours to be confirmed by clinic]</p>
          </article>
          <article className={styles.qaPair}>
            <h3>Is parking available?</h3>
            <p>[Placeholder &mdash; parking details here]</p>
          </article>
        </div>
      </section>

      <section className={styles.ctaSection} aria-labelledby="cta-title">
        <h2 id="cta-title">Still have questions?</h2>
        <p>If you couldn&apos;t find the answer to your question, please don&apos;t hesitate to contact us.</p>
        <Link href="/location-contact" className={styles.primaryCta}>
          Contact Us
        </Link>
      </section>
    </div>
  );
}
