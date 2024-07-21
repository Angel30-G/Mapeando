import React from "react";

function Download({ color = "#000", width = "24", height = "24" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width={width}
      height={height}
    >
      <path
        stroke={color || "#DFDFEC"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 11v6l2-2M9 17l-2-2"
      ></path>
      <path
        stroke={color || "#DFDFEC"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h5"
      ></path>
      <path
        stroke={color || "#DFDFEC"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M22 10h-4c-3 0-4-1-4-4V2l8 8z"
      ></path>
    </svg>
  );
}

export default Download;
