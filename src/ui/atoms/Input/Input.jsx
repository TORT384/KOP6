import React from 'react';

export function Input({ value, onChange, placeholder, type = 'text', ...props }) {
  const style = {
    padding: '8px 12px',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--color-border)',
    backgroundColor: 'var(--color-surface)',
    color: 'var(--color-text)',
    outline: 'none',
  };

  return (
    <input 
      type={type} 
      value={value} 
      onChange={onChange} 
      placeholder={placeholder} 
      style={style} 
      {...props} 
    />
  );
}