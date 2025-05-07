'use client';

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
}

export default function InputBox({ leftIcon, ...props }: InputProps) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
      boxShadow: '0 4px 24px -1px #0003',
      background: 'linear-gradient(180deg, hsla(0, 0%, 100%, 0.2) 10.38%, hsla(0, 0%, 100%, 0) 137.67%)',
      WebkitBackdropFilter: 'blur(40px)',
      backdropFilter: 'blur(40px)',
      borderStyle: 'none',
      borderRadius: '8px',
      padding: '0 16px',
      height: '48px',
      width: '100%',
    }}>
      {leftIcon && (
        <div style={{ marginRight: '8px', display: 'flex', alignItems: 'center' }}>
          {leftIcon}
        </div>
      )}
      <input
        {...props}
        style={{
          flex: 1,
          background: 'transparent',
          border: 'none',
          outline: 'none',
          color: '#fff',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '18px',
        }}
      />
    </div>
  );
}
