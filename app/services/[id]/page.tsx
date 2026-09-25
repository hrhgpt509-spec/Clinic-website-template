import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { fetchDepartments, fetchDoctors } from '@/lib/mockData';
import styles from './department.module.css';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const depts = await fetchDepartments();
  const dept = depts.find(d => d.id === id);
  
  if (!dept) return { title: 'Department Not Found | [Clinic Name]' };
  
  return {
    title: `${dept.name} Department | [Clinic Name]`,
    description: `Learn about the ${dept.name} department and services at [Clinic Name].`
  };
}

export default async function DepartmentPage({ params }: Props) {
  const { id } = await params;
  
  const [departments, doctors] = await Promise.all([
    fetchDepartments(),
    fetchDoctors()
  ]);
  
  const dept = departments.find(d => d.id === id);
  
  if (!dept) {
    notFound();
  }

  const deptDoctors = doctors.filter(doc => doc.departmentId === id);
  const headDoctor = dept.headDoctorId ? doctors.find(doc => doc.id === dept.headDoctorId) : null;

  return (
    <div className={styles.container}>
      <Link href="/services" className={styles.backLink}>
        &larr; Back to All Services
      </Link>
      
      <header className={styles.header}>
        <h1>{dept.name} Department</h1>
        <p className={styles.description}>{dept.description}</p>
      </header>

      <div className={styles.contentGrid}>
        <div className={styles.mainContent}>
          <section className={styles.section} aria-labelledby="treatments-title">
            <h2 id="treatments-title">Treatments &amp; Procedures</h2>
            <p><em>[Placeholder Content] Details regarding specific treatments, advanced procedures, and diagnostic services provided by the {dept.name} department.</em></p>
            <ul>
              <li>[Placeholder: Treatment / Procedure A]</li>
              <li>[Placeholder: Treatment / Procedure B]</li>
              <li>[Placeholder: Treatment / Procedure C]</li>
            </ul>
          </section>

          <section className={styles.section} aria-labelledby="facilities-title">
            <h2 id="facilities-title">Department Facilities</h2>
            <p><em>[Placeholder Content] Information about the state-of-the-art medical equipment, specialized wards, and clinical technology available.</em></p>
            <p>Location: [Placeholder: Main Hospital, Floor X]</p>
          </section>
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.card}>
            <h3>Appointments</h3>
            <p>Schedule a visit with one of our {dept.name} specialists.</p>
            <Link href={`/appointments/book?departmentId=${dept.id}`} className={styles.bookButton}>
              Book an Appointment
            </Link>
          </div>

          <div className={styles.card}>
            <h3 id="specialists-title">Our Specialists</h3>
            {deptDoctors.length > 0 ? (
              <ul aria-labelledby="specialists-title" className={styles.doctorList}>
                {deptDoctors.map(doc => (
                  <li key={doc.id}>
                    <Link href={`/doctors/${doc.id}`} className={styles.docLink}>
                      Dr. {doc.firstName} {doc.lastName}
                    </Link>
                    {headDoctor?.id === doc.id && <span className={styles.headBadge}>Head</span>}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No specialists currently listed for this department.</p>
            )}
            
            <div className={styles.viewAllDoctors}>
              <Link href="/doctors" className={styles.secondaryLink}>
                View all clinic doctors
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
