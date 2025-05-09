import React from 'react';

interface SubIconProps {
  width?: number;
  height?: number;
  fillColor?: string;
}

const SubIcon: React.FC<SubIconProps> = ({
  width = 24,
  height = 24,
  fillColor = '#636567',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 7.25C3 6.00725 4.00725 5 5.25 5H18.75C19.9928 5 21 6.00725 21 7.25V16.25C21 17.4928 19.9928 18.5 18.75 18.5H5.25C4.00725 18.5 3 17.4928 3 16.25V7.25ZM5.25 6.5C4.836 6.5 4.5 6.836 4.5 7.25V8H19.5V7.25C19.5 6.836 19.164 6.5 18.75 6.5H5.25ZM19.5 9.5H4.5V16.25C4.5 16.664 4.836 17 5.25 17H18.75C19.164 17 19.5 16.664 19.5 16.25V9.5ZM6 14.75C6 14.336 6.336 14 6.75 14H11.25C11.664 14 12 14.336 12 14.75C12 15.164 11.664 15.5 11.25 15.5H6.75C6.336 15.5 6 15.164 6 14.75Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default SubIcon;
