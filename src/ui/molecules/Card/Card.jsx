import React from 'react';

export function Card({ children, style = {} }) {
  const cardStyle = {
    backgroundColor: 'var(--color-surface)',
    color: 'var(--color-text)',
    padding: '16px',
    borderRadius: 'var(--radius-md)',
    boxShadow: 'var(--shadow-sm)',
    ...style,
  };

  return <div style={cardStyle}>{children}</div>;
}