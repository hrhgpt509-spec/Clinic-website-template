import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About Us | [Clinic Name]',
  description: '[Placeholder description for the About Us page outlining the clinic mission and history.]'
};

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <header className={styles.pageHeader}>
        <h1>About [Clinic Name]</h1>
        <p>[Placeholder mission statement focusing on delivering exceptional healthcare to the community.]</p>
      </header>

      <section className={styles.section} aria-labelledby="mission-title">
        <h2 id="mission-title">Our Mission</h2>
        <p>[Placeholder text outlining the clinic's dedication to providing accessible, high-quality medical care. It should emphasize a patient-first approach, ongoing medical education, and community integration.]</p>
        <p>[Placeholder text detailing the vision for the future, continuous improvement, and establishing a trusted healthcare environment for families and individuals alike.]</p>
        <ul className={styles.valuesList}>
          <li><strong>Patient First:</strong> [Prioritizing patient well-being and comfort placeholder.]</li>
          <li><strong>Integrity:</strong> [Upholding the highest ethical standards placeholder.]</li>
          <li><strong>Excellence:</strong> [Commitment to continuous clinical improvement placeholder.]</li>
          <li><strong>Compassion:</strong> [Treating everyone with empathy and respect placeholder.]</li>
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="story-title">
        <h2 id="story-title">Our Story</h2>
        <p>[Placeholder text covering the founding of the clinic, initial milestones, and the motivation behind establishing a healthcare facility in this community.]</p>
        <p>[Placeholder text discussing the growth of the clinic, expanding services, and the ongoing commitment to adapting to modern healthcare needs.]</p>
        <p><em>[Clinic history and milestones to be provided by clinic]</em></p>
      </section>

      <section className={styles.section} aria-labelledby="accreditations-title">
        <h2 id="accreditations-title">Accreditations &amp; Certifications</h2>
        <ul className={styles.accreditationsList}>
          <li>[Accreditation Body Placeholder]</li>
          <li>[Certification Name Placeholder]</li>
        </ul>
        <p><em>Accreditation details to be confirmed and verified by the clinic.</em></p>
      </section>

      <section className={styles.section} aria-labelledby="facilities-title">
        <h2 id="facilities-title">Our Facilities</h2>
        <ul className={styles.facilitiesList}>
          <li>[Modern diagnostic equipment &mdash; details to be confirmed]</li>
          <li>[Comfortable patient waiting areas and private consultation rooms placeholder]</li>
          <li>[State-of-the-art surgical and treatment suites placeholder]</li>
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="team-title">
        <h2 id="team-title">Meet Our Team</h2>
        <p>[Placeholder text introducing the medical professionals and staff dedicated to your care.] Our highly qualified doctors and specialists are here to support your health journey.</p>
        <p>
          <Link href="/doctors" className={styles.secondaryLink}>
            View our comprehensive doctor directory
          </Link>
        </p>
      </section>

      <section className={styles.ctaSection} aria-labelledby="cta-title">
        <h2 id="cta-title">Ready to Experience Exceptional Care?</h2>
        <p>[Placeholder text encouraging patients to book their first appointment or reach out for inquiries.]</p>
        <div className={styles.ctaActions}>
          <Link href="/appointments/book" className={styles.primaryLink}>
            Book an Appointment
          </Link>
          <Link href="/location-contact" className={styles.secondaryLink}>
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
