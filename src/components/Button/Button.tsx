import React from 'react';
import './Button.css';

export interface CISButtonProps {
  type?: 'primary' | 'secondary' | 'warning';
  backgroundColor?: string;
  size?: 'small' | 'default' | 'large';
  label: string;
  onClick?: () => void;
}

export const CISButton = ({
  type = 'primary',
  size = 'default',
  backgroundColor,
  label,
  ...props
}: CISButtonProps) => {
  return (
    <button
      type="button"
      className={['button', `button--${size}`, `button--${type}`].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
