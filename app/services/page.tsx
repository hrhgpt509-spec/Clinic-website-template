import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { fetchDepartments } from '@/lib/mockData';
import styles from './services.module.css';

export const metadata: Metadata = {
  title: 'Our Services & Departments | [Clinic Name]',
  description: 'Explore the comprehensive medical services and departments offered at [Clinic Name].'
};

export default async function ServicesPage() {
  const departments = await fetchDepartments();
  
  if (!departments || departments.length === 0) {
    return (
      <div className={styles.container}>
        <h1>Our Services</h1>
        <p className={styles.emptyState}>No services are currently listed. Please check back later.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Our Services &amp; Departments</h1>
        <p>Explore our specialized departments. We offer a wide range of medical services to meet your healthcare needs.</p>
      </header>

      <div className={styles.grid}>
        {departments.map((dept) => (
          <div key={dept.id} className={styles.card}>
            <h2>{dept.name}</h2>
            <p>{dept.description}</p>
            <div className={styles.actions}>
              <Link href={`/services/${dept.id}`} className={styles.primaryLink}>
                Learn more about {dept.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
