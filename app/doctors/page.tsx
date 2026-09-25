'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Doctor, Department } from '@/types/hospital';
import { fetchDoctors, fetchDepartments } from '@/lib/mockData';
import styles from './doctors.module.css';

export default function DoctorDirectory() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('');

  const loadData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const [docs, depts] = await Promise.all([fetchDoctors(), fetchDepartments()]);
      setDoctors(docs);
      setDepartments(depts);
    } catch {
      setError('Failed to load physician data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadData();
  }, []);

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doc) => {
      const searchTerms = `${doc.firstName} ${doc.lastName} ${doc.specialty}`.toLowerCase();
      const matchesSearch = searchTerms.includes(searchQuery.toLowerCase());
      const matchesDept = selectedDept ? doc.departmentId === selectedDept : true;
      return matchesSearch && matchesDept;
    });
  }, [doctors, searchQuery, selectedDept]);

  return (
    <div className={styles.container}>
      <h1>Find a Doctor</h1>
      
      <div className={styles.filters} role="search" aria-label="Filter doctors">
        <div className={styles.filterGroup}>
          <label htmlFor="search-input">Search by Name or Specialty</label>
          <input
            id="search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="e.g. Cardiology or John"
          />
        </div>
        
        <div className={styles.filterGroup}>
          <label htmlFor="specialty-select">Filter by Department</label>
          <select
            id="specialty-select"
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
          >
            <option value="">All Departments</option>
            {departments.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {isLoading && (
        <div className={styles.grid} aria-live="polite" aria-busy="true">
          {[1, 2, 3].map((n) => (
             <div key={n} className={styles.skeletonCard} aria-hidden="true" />
          ))}
        </div>
      )}

      {error && !isLoading && (
        <div className={`${styles.message} ${styles.error}`} role="alert">
          <p>{error}</p>
          <button onClick={loadData} className={styles.retryButton}>Retry</button>
        </div>
      )}

      {!isLoading && !error && filteredDoctors.length === 0 && (
        <div className={styles.message} role="status">
          No physicians match your search criteria.
        </div>
      )}

      {!isLoading && !error && filteredDoctors.length > 0 && (
        <div className={styles.grid} role="region" aria-label="Doctor search results">
          {filteredDoctors.map((doc) => {
            const deptName = departments.find(d => d.id === doc.departmentId)?.name || 'General';
            
            return (
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
                    <h2>Dr. {doc.firstName} {doc.lastName}</h2>
                    <span className={styles.badge}>{doc.specialty}</span>
                  </div>
                </div>
                <div className={styles.details}>
                  <p><strong>Department:</strong> {deptName}</p>
                  <p><strong>Location:</strong> {doc.location || 'Main Campus'}</p>
                </div>
                <Link href={`/appointments/book?doctorId=${doc.id}`} className={styles.bookButton}>
                  Book Appointment
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
