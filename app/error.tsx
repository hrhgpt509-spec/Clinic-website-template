'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from './not-found.module.css';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service behind the scenes
    console.error(error);
  }, [error]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Something went wrong</h1>
      <p className={styles.message}>An unexpected error occurred. Please try again.</p>
      
      <div className={styles.linksList}>
        <button onClick={() => reset()} className={styles.primaryButton}>
          Try Again
        </button>
        <Link href="/" className={styles.secondaryLink}>
          Return to Home
        </Link>
      </div>
    </div>
  );
}
