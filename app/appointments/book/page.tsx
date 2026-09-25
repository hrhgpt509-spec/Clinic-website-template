import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import BookForm from './BookForm';
import styles from './book.module.css';

export const metadata: Metadata = {
  title: 'Book an Appointment | [Clinic Name]',
  description: 'Request an appointment with our specialists. This is a template demo.',
};

export default function BookAppointmentPage() {
  return (
    <div className={styles.container}>
      <h1 id="form-title" className={styles.pageTitle}>Book an Appointment</h1>
      <Suspense fallback={<div>Loading form...</div>}>
        <BookForm />
      </Suspense>
    </div>
  );
}
