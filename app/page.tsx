import Link from 'next/link';
import Image from 'next/image';
import { fetchDepartments, fetchDoctors } from '@/lib/mockData';
import styles from './home.module.css';

export default async function HomePage() {
  const [departments, doctors] = await Promise.all([
    fetchDepartments(),
    fetchDoctors()
  ]);

  // Use a subset for the homepage preview
  const previewDoctors = doctors.slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "[Clinic Name]",
    "url": "https://example-clinic.com",
    "telephone": "[Phone Placeholder]",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "[Street Address Placeholder]",
      "addressLocality": "[City Placeholder]",
      "addressRegion": "[State Placeholder]",
      "postalCode": "[Zip Placeholder]",
      "addressCountry": "[Country Placeholder]"
    },
    "openingHours": "[Placeholder]"
  };

  return (
    <div className={styles.container}>
      {/* TEMPLATE: Replace all placeholder values with real clinic data before launch */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      {/* 1 & 2. Hero Section */}
      <section className={`${styles.section} ${styles.hero}`} aria-labelledby="hero-title">
        <div className={styles.heroContent}>
          <h1 id="hero-title">Welcome to [Clinic Name]</h1>
          <p>Providing exceptional healthcare services for you and your family.</p>
          <div className={styles.heroActions}>
            <Link href="/appointments/book" className={styles.primaryCta}>
              Book an Appointment
            </Link>
            <Link href="/doctors" className={styles.secondaryCta}>
              Find a Doctor
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Emergency / Quick Contact */}
      <section className={`${styles.section} ${styles.emergencyContact}`} aria-labelledby="emergency-title">
        <h2 id="emergency-title">Need Immediate Care?</h2>
        <p>If you are experiencing a medical emergency, please call <strong>[Emergency Number Placeholder]</strong> or visit the nearest emergency room.</p>
        <p>For urgent clinic inquiries, call: <strong><a href="tel:1-800-XXX-XXXX">1-800-XXX-XXXX</a></strong></p>
      </section>

      {/* 4. Services Overview */}
      <section className={`${styles.section} ${styles.services}`} aria-labelledby="services-title">
        <h2 id="services-title">Our Services</h2>
        <div className={styles.grid}>
          {departments.map(dept => (
            <div key={dept.id} className={styles.card}>
              <h3>{dept.name}</h3>
              <p>{dept.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Doctor Discovery */}
      <section className={`${styles.section} ${styles.doctors}`} aria-labelledby="doctors-title">
        <h2 id="doctors-title">Meet Our Specialists</h2>
        <div className={styles.grid}>
          {previewDoctors.map((doc) => (
            <div key={doc.id} className={styles.card}>
               <div className={styles.cardHeader}>
                  {doc.imageUrl && (
                    <Image
                      src={doc.imageUrl}
                      alt={`Portrait of Dr. ${doc.firstName} ${doc.lastName}`}
                      width={64}
                      height={64}
                      className={styles.avatar}
                      unoptimized
                    />
                  )}
                  <div className={styles.cardInfo}>
                    <h3>Dr. {doc.firstName} {doc.lastName}</h3>
                    <span className={styles.badge}>{doc.specialty}</span>
                  </div>
                </div>
            </div>
          ))}
        </div>
        <div className={styles.centerAction}>
          <Link href="/doctors" className={styles.secondaryCta}>View All Doctors</Link>
        </div>
      </section>

      {/* 6. Trust/Information Section */}
      <section className={`${styles.section} ${styles.trust}`} aria-labelledby="trust-title">
        <h2 id="trust-title">Why Choose Us?</h2>
        <ul className={styles.trustList}>
          <li>Experienced and compassionate staff.</li>
          <li>State-of-the-art facilities.</li>
          <li>Patient-centered approach to healthcare.</li>
        </ul>
      </section>

      {/* 7. Location / Contact */}
      <section className={`${styles.section} ${styles.location}`} aria-labelledby="location-title">
        <h2 id="location-title">Visit Us</h2>
        <address className={styles.addressBox}>
          <p><strong>[Clinic Name]</strong></p>
          <p>[Street Address Placeholder]</p>
          <p>[City, State, Zip Placeholder]</p>
          <p>Phone: <a href="tel:1-800-XXX-XXXX">1-800-XXX-XXXX</a></p>
        </address>
        <p>Operating Hours: [Hours Placeholder]</p>
      </section>

      {/* 8. Final CTA */}
      <section className={`${styles.section} ${styles.finalCta}`} aria-labelledby="final-cta-title">
        <h2 id="final-cta-title">Ready to take the next step?</h2>
        <Link href="/appointments/book" className={styles.primaryCta}>
          Schedule Your Visit
        </Link>
      </section>
    </div>
  );
}
