import React from 'react';
import { tokens } from '../../tokens/tokens';

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  onClick, 
  ...props 
}) {
  const getBgColor = () => {
    if (variant === 'danger') return tokens.colors.danger;
    if (variant === 'secondary') return 'transparent';
    return tokens.colors.primary;
  };

  const style = {
    padding: size === 'sm' ? '6px 12px' : size === 'lg' ? '12px 24px' : '8px 16px',
    borderRadius: tokens.radii.sm,
    border: variant === 'secondary' ? `1px solid ${tokens.colors.primary}` : 'none',
    backgroundColor: getBgColor(),
    color: variant === 'secondary' ? tokens.colors.primary : '#ffffff',
    fontWeight: 'bold',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: 'all 0.2s',
  };

  return (
    <button style={style} disabled={disabled} onClick={onClick} {...props}>
      {children}
    </button>
  );
}