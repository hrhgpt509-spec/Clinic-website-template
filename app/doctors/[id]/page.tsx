import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { fetchDoctors, fetchDepartments } from '@/lib/mockData';
import styles from './profile.module.css';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const docs = await fetchDoctors();
  const doc = docs.find(d => d.id === id);
  
  if (!doc) {
    return { title: 'Doctor Not Found | [Clinic Name]' };
  }
  
  return {
    title: `Dr. ${doc.firstName} ${doc.lastName} - ${doc.specialty} | [Clinic Name]`,
    description: `[Placeholder SEO Description: Dr. ${doc.firstName} ${doc.lastName} is a specialist in ${doc.specialty} at Clinic Name.]`
  };
}

export default async function DoctorProfilePage({ params }: Props) {
  const { id } = await params;
  
  // In a real app we'd likely fetch just one doctor by ID
  const [docs, depts] = await Promise.all([
    fetchDoctors(),
    fetchDepartments()
  ]);
  
  const doc = docs.find(d => d.id === id);
  
  if (!doc) {
    notFound();
  }
  
  const dept = depts.find(d => d.id === doc.departmentId);
  const deptName = dept?.name || 'General';

  return (
    <div className={styles.container}>
      <Link href="/doctors" className={styles.backLink}>
        &larr; Back to Doctor Directory
      </Link>
      
      <article className={styles.profileCard}>
        <header className={styles.header}>
          {doc.imageUrl && (
            <Image
              src={doc.imageUrl}
              alt={`Portrait of Dr. ${doc.firstName} ${doc.lastName}`}
              width={120}
              height={120}
              className={styles.avatar}
              unoptimized
            />
          )}
          <div className={styles.titleGroup}>
            <h1>Dr. {doc.firstName} {doc.lastName}</h1>
            <span className={styles.badge}>{doc.specialty}</span>
            <div className={`${styles.status} ${doc.isAcceptingNewPatients ? styles.accepting : styles.notAccepting}`}>
              {doc.isAcceptingNewPatients ? '✓ Accepting New Patients' : '✗ Not Accepting New Patients'}
            </div>
          </div>
        </header>

        <section className={styles.section} aria-labelledby="clinical-info">
          <h2 id="clinical-info">Clinical Information</h2>
          <p><strong>Department:</strong> {deptName}</p>
          <p><strong>Primary Location:</strong> {doc.location || '[Location Placeholder]'}</p>
        </section>

        <section className={styles.section} aria-labelledby="qualifications">
          <h2 id="qualifications">Qualifications &amp; Experience</h2>
          <p><em>[Placeholder Content] This section demonstrates where the doctor&apos;s educational background, medical school, residency, and board certifications would be displayed.</em></p>
          <ul>
            <li>[Placeholder: Board Certified in {doc.specialty}]</li>
            <li>[Placeholder: Residency at Template Medical Center]</li>
            <li>[Placeholder: Medical Degree from Example University]</li>
          </ul>
        </section>

        <section className={styles.section} aria-labelledby="areas-of-practice">
          <h2 id="areas-of-practice">Areas of Practice</h2>
          <p><em>[Placeholder Content] Details regarding specific procedures, treatments, and clinical focus areas for Dr. {doc.lastName}.</em></p>
          <ul>
            <li>[Placeholder: Area of Practice 1]</li>
            <li>[Placeholder: Area of Practice 2]</li>
            <li>[Placeholder: Area of Practice 3]</li>
          </ul>
        </section>

        <div className={styles.bookSection}>
          <Link href={`/appointments/book?doctorId=${doc.id}`} className={styles.bookButton}>
            Book Appointment with Dr. {doc.lastName}
          </Link>
        </div>
      </article>
    </div>
  );
}
