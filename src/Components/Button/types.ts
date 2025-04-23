import React from 'react';

export interface ButtonProps {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark' | 'link';
  click: (event: React.MouseEvent) => void;
}