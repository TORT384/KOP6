import React from 'react';

export function Badge({ children, variant = 'info' }) {
  const bg = variant === 'success' ? '#52c41a' : variant === 'warning' ? '#faad14' : '#007bff';
  const style = {
    display: 'inline-block',
    padding: '4px 8px',
    borderRadius: '4px',
    backgroundColor: bg,
    color: '#fff',
    fontSize: '12px',
    fontWeight: 'bold',
  };

  return <span style={style}>{children}</span>;
}