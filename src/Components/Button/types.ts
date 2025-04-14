import React from 'react';

export interface ButtonProps {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary';
  click: (event: React.MouseEvent) => void;
}