import React from 'react';

export interface InputProps {
  placeholder?: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  additionalClasses?: string;
}