import React from 'react';

export function FormField({ label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <label style={{ fontSize: '13px', color: 'var(--color-subtext)' }}>{label}</label>
      {children}
    </div>
  );
}