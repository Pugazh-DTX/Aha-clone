'use client';

import React from 'react';

export default function GenderSelectSimple() {
  return (
    <div>
      {/* <label htmlFor="gender">Gender</label> */}
      <select
        id="gender"
        name="gender"
        required
        style={{
          boxSizing: 'border-box',
          boxShadow: '0 4px 24px -1px #0003',
          background: 'linear-gradient(180deg, hsla(0, 0%, 100%, 0.2) 10.38%, hsla(0, 0%, 100%, 0) 137.67%)',
          caretColor: '#ff6d2e',
          WebkitBackdropFilter: 'blur(40px)',
          backdropFilter: 'blur(40px)',
          borderStyle: 'none',
          borderRadius: '8px',
          padding: '16px',
          margin: '0',
          color: '#fff',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '18px',
          display: 'flex',
          height: '48px', /* Perfect compact height */
        width: '100%',
        }}
        aria-label="Gender Selection"
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="others">Others</option>
        <option value="preferNotToSay">Prefer Not to Say</option>
      </select>
    </div>
  );
}
