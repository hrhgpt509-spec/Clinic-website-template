import React from 'react';
import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Page Not Found</h1>
      <p className={styles.message}>The page you&apos;re looking for doesn&apos;t exist or may have moved.</p>
      
      <div className={styles.linksList}>
        <Link href="/" className={styles.primaryButton}>
          Return to Home
        </Link>
        <Link href="/services" className={styles.secondaryLink}>
          Our Services
        </Link>
        <Link href="/doctors" className={styles.secondaryLink}>
          Find a Doctor
        </Link>
        <Link href="/location-contact" className={styles.secondaryLink}>
          Contact Us
        </Link>
      </div>
    </div>
  );
}
