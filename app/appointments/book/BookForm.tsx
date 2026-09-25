'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { fetchDoctors, fetchDepartments } from '@/lib/mockData';
import type { Doctor, Department } from '@/types/hospital';
import styles from './book.module.css';

export default function BookForm() {
  const searchParams = useSearchParams();
  const initialDoctorId = searchParams.get('doctorId') || '';
  const initialDepartmentId = searchParams.get('departmentId') || '';

  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [formData, setFormData] = useState({
    doctorId: initialDoctorId,
    departmentId: initialDepartmentId,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    notes: '',
    date: '',
    timePreference: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    Promise.all([fetchDoctors(), fetchDepartments()]).then(([docs, depts]) => {
      setDoctors(docs);
      setDepartments(depts);
      setIsLoading(false);
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required.';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    if (!formData.date) newErrors.date = 'Date is required.';
    if (!formData.timePreference) newErrors.timePreference = 'Time preference is required.';
    if (!formData.doctorId) newErrors.doctorId = 'Doctor selection is required.';
    if (!formData.departmentId) newErrors.departmentId = 'Department selection is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className={styles.successMessage} role="alert">
        <h2>Request Submitted</h2>
        <p>Thank you for your request. This is a website template demo. <strong>No real appointment has been booked.</strong></p>
        <p>A real clinic would contact you at {formData.email} or {formData.phone} to confirm your appointment details.</p>
        <button className={styles.submitButton} onClick={() => setIsSubmitted(false)}>Submit Another Request</button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-labelledby="form-title" noValidate>
      <div className={styles.disclaimer} role="alert">
        This is a website template. No real appointment will be booked.
      </div>

      <section className={styles.section}>
        <h2>Provider Details</h2>
        <div className={styles.formGroup}>
          <label htmlFor="departmentId">Select Department *</label>
          <select 
            id="departmentId" 
            name="departmentId" 
            value={formData.departmentId} 
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.departmentId}
            aria-describedby={errors.departmentId ? "departmentId-error" : undefined}
            className={errors.departmentId ? styles.inputError : ''}
            disabled={isLoading}
          >
            <option value="">-- Choose a Department --</option>
            {departments.map(d => (
              <option key={d.id} value={d.id}>{d.name}</option>
            ))}
          </select>
          {errors.departmentId && <span id="departmentId-error" className={styles.errorText}>{errors.departmentId}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="doctorId">Select Doctor *</label>
          <select 
            id="doctorId" 
            name="doctorId" 
            value={formData.doctorId} 
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.doctorId}
            aria-describedby={errors.doctorId ? "doctorId-error" : undefined}
            className={errors.doctorId ? styles.inputError : ''}
            disabled={isLoading}
          >
            <option value="">-- Choose a Doctor --</option>
            {doctors.map(d => (
              <option key={d.id} value={d.id}>Dr. {d.firstName} {d.lastName} - {d.specialty}</option>
            ))}
          </select>
          {errors.doctorId && <span id="doctorId-error" className={styles.errorText}>{errors.doctorId}</span>}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Patient Details</h2>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">First Name *</label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName" 
            value={formData.firstName} 
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
            className={errors.firstName ? styles.inputError : ''}
          />
          {errors.firstName && <span id="firstName-error" className={styles.errorText}>{errors.firstName}</span>}
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="lastName">Last Name *</label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName" 
            value={formData.lastName} 
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.lastName}
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
            className={errors.lastName ? styles.inputError : ''}
          />
          {errors.lastName && <span id="lastName-error" className={styles.errorText}>{errors.lastName}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone Number *</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={errors.phone ? styles.inputError : ''}
          />
          {errors.phone && <span id="phone-error" className={styles.errorText}>{errors.phone}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address *</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={errors.email ? styles.inputError : ''}
          />
          {errors.email && <span id="email-error" className={styles.errorText}>{errors.email}</span>}
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="notes">Additional Notes (Optional)</label>
          <textarea 
            id="notes" 
            name="notes" 
            value={formData.notes} 
            onChange={handleChange}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Preferred Date &amp; Time</h2>
        <div className={styles.formGroup}>
          <label htmlFor="date">Preferred Date *</label>
          <input 
            type="date" 
            id="date" 
            name="date" 
            value={formData.date} 
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.date}
            aria-describedby={errors.date ? "date-error" : undefined}
            className={errors.date ? styles.inputError : ''}
          />
          {errors.date && <span id="date-error" className={styles.errorText}>{errors.date}</span>}
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="timePreference">Time Preference *</label>
          <select 
            id="timePreference" 
            name="timePreference" 
            value={formData.timePreference} 
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.timePreference}
            aria-describedby={errors.timePreference ? "timePreference-error" : undefined}
            className={errors.timePreference ? styles.inputError : ''}
          >
            <option value="">-- Choose a Time --</option>
            <option value="Morning">Morning (8 AM - 12 PM)</option>
            <option value="Afternoon">Afternoon (12 PM - 4 PM)</option>
            <option value="Evening">Evening (4 PM - 8 PM)</option>
          </select>
          {errors.timePreference && <span id="timePreference-error" className={styles.errorText}>{errors.timePreference}</span>}
        </div>
      </section>

      <button type="submit" className={styles.submitButton}>
        Submit Appointment Request
      </button>
    </form>
  );
}
