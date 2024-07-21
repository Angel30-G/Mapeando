import React from "react";

interface IconProps {
  color?: string;
  width?: string;
  height?: string;
}

function Icon({ color = "#E3E3E3", width = "24", height = "24" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.5V18m6-7.5v5m6 3.5l-6-2-6 2.5L3 17V9l6 2 6-2 6 2v8z"
      ></path>
      <path
        stroke={color}
        strokeLinejoin="round"
        d="M12 8h0c1-1 2-2 2-3s-.5-2-2-2-2 1-2 2 1 2 2 3z"
      ></path>
      <circle cx="12" cy="5" r="0.5" stroke={color}></circle>
    </svg>
  );
}

export default Icon;
