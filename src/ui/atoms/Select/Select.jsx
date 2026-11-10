import React from 'react';

export function Select({ value, onChange, children, ...props }) {
  const style = {
    padding: '8px 12px',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--color-border)',
    backgroundColor: 'var(--color-surface)',
    color: 'var(--color-text)',
    outline: 'none',
    cursor: 'pointer',
  };

  return (
    <select value={value} onChange={onChange} style={style} {...props}>
      {children}
    </select>
  );
}