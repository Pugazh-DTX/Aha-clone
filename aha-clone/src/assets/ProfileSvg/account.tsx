import React from 'react';

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

const AcountIcon: React.FC<IconProps> = ({ width = 24, height = 24, color = "#636567" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_5811_7848)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.25 4.5C6.836 4.5 6.5 4.836 6.5 5.25V18.75C6.5 19.164 6.836 19.5 7.25 19.5H16.25C16.664 19.5 17 19.164 17 18.75V9.75H14C12.7572 9.75 11.75 8.74275 11.75 7.5V4.5H7.25ZM13.25 5.5605L15.9395 8.25H14C13.586 8.25 13.25 7.914 13.25 7.5V5.5605ZM5 5.25C5 4.00725 6.00725 3 7.25 3H12.5C12.6988 3 12.8892 3.07875 13.0302 3.21975L18.2803 8.46975C18.4213 8.61 18.5 8.80125 18.5 9V18.75C18.5 19.9928 17.4928 21 16.25 21H7.25C6.00725 21 5 19.9928 5 18.75V5.25Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_5811_7848">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default AcountIcon;
