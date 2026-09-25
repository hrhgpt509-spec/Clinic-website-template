import React from 'react';
import type { Metadata } from 'next';
import ContactForm from './ContactForm';
import styles from './location.module.css';

export const metadata: Metadata = {
  title: 'Contact & Location | [Clinic Name]',
  description: 'Get in touch with [Clinic Name]. View our location, opening hours, and contact information. (Template Demo)',
};

export default function LocationContactPage() {
  return (
    <div className={styles.container}>
      <header className={styles.pageHeader}>
        <h1>Contact &amp; Location</h1>
        <p>Get in touch with [Clinic Name] or visit us at our main location.</p>
      </header>

      <div className={styles.emergencyPanel} role="note">
        <strong>Medical Emergency:</strong> For medical emergencies, call [Emergency Number Placeholder] or visit your nearest emergency department immediately.
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.infoSection}>
          <section className={styles.card}>
            <h2>Clinic Information</h2>
            <address className={styles.addressBox}>
              <strong>[Clinic Name]</strong><br />
              [Street Address Placeholder]<br />
              [City, State, PIN Placeholder]
            </address>
            <p><strong>Phone:</strong> [General Enquiry Number Placeholder]</p>
            <p><strong>Email:</strong> [Clinic Email Placeholder]</p>
            
            <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-primary-dark)', fontSize: 'var(--font-size-base)' }}>Opening Hours</h3>
            <div style={{ overflowX: 'auto' }}>
              <table className={styles.hoursTable}>
                <tbody>
                  <tr>
                    <th scope="row">Monday–Friday</th>
                    <td>[Weekday Hours Placeholder]</td>
                  </tr>
                  <tr>
                    <th scope="row">Saturday</th>
                    <td>[Weekend Hours Placeholder]</td>
                  </tr>
                  <tr>
                    <th scope="row">Sunday</th>
                    <td>[Closed / Sunday Hours Placeholder]</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className={styles.card}>
            <h2>Getting Here</h2>
            <p><strong>Public Transport:</strong> [Public transport info placeholder. E.g., Nearest train station is 5 mins walk away.]</p>
            <p><strong>Parking:</strong> [Parking info placeholder. E.g., Visitor parking is available in the basement.]</p>

            <div className={styles.mapPlaceholder} aria-label="Map Placeholder">
              Map &mdash; Integration required for production
            </div>
          </section>
        </div>

        <div>
          <section className={styles.card} aria-labelledby="form-heading">
            <h2 id="form-heading">Send us a Message</h2>
            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>Use the form below for general inquiries. This is a template demo.</p>
            <ContactForm />
          </section>
        </div>
      </div>
    </div>
  );
}
