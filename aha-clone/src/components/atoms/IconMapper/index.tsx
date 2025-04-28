'use client';

import React, { useState } from 'react';
import Icons from '@/assets/ProfileSvg/Icon'; // 👈 make sure you import your Icons mapping

interface IconMapperProps {
  name: keyof typeof Icons; // restricts to 'info' | 'subscription' | 'device' | 'profiles' | 'parental' | 'settings'
  className?: string;
  isActive?: boolean;
  width?: number;
  height?: number;
  fill?: string;
}

const IconMapper: React.FC<IconMapperProps> = ({
  name,
  className = '',
  isActive = false,
  width = 33,
  height = 22,
  fill = '#636567',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const IconComponent = Icons[name];

  if (!IconComponent) {
    console.warn(`Icon component not found for: ${name}`);
    return null;
  }

  const getFillColor = () => {
    if (isActive) return 'red'; // Active color (example)
    if (isHovered) return '#1D4ED8'; // Hover color (example)
    return fill; // Default fill color
  };

  return (
    <div
      className={`${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <IconComponent width={width} height={height} fill={getFillColor()} />
    </div>
  );
};

export default IconMapper;
