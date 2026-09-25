import React from 'react';

export function EmergencyBanner() {
  return (
    <div role="region" aria-label="Emergency Information" className="emergency-banner">
      <p>
        <strong>Emergency?</strong> Call <a href="tel:1-800-XXX-XXXX">1-800-XXX-XXXX</a> immediately or go to the nearest emergency room.
      </p>
    </div>
  );
}
