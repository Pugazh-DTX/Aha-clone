import React from 'react';

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

const ParentalIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  color = "#636567",
}) => (
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
      d="M11.75 4.5C10.0933 4.5 8.75 5.84325 8.75 7.5V10.5H14.75V7.5C14.75 5.84325 13.4067 4.5 11.75 4.5ZM16.25 10.5V7.5C16.25 5.01525 14.2347 3 11.75 3C9.26525 3 7.25 5.01525 7.25 7.5V10.5C6.00725 10.5 5 11.5072 5 12.75V18.75C5 19.9928 6.00725 21 7.25 21H16.25C17.4928 21 18.5 19.9928 18.5 18.75V12.75C18.5 11.5072 17.4928 10.5 16.25 10.5ZM7.25 12C6.836 12 6.5 12.336 6.5 12.75V18.75C6.5 19.164 6.836 19.5 7.25 19.5H16.25C16.664 19.5 17 19.164 17 18.75V12.75C17 12.336 16.664 12 16.25 12H7.25ZM11.75 14.25C12.164 14.25 12.5 14.586 12.5 15V16.5C12.5 16.914 12.164 17.25 11.75 17.25C11.336 17.25 11 16.914 11 16.5V15C11 14.586 11.336 14.25 11.75 14.25Z"
      fill={color}
    />
  </svg>
);

export default ParentalIcon;
