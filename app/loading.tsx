import React from 'react';

export default function Loading() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh', color: 'var(--color-primary-dark)' }}>
      <p style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold' }}>Loading...</p>
    </div>
  );
}
