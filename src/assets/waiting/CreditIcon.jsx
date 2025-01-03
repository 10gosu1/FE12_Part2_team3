import React from 'react';

const CreditIcon = ({ width = 24, height = 28 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width} 
    height={height} // 동적으로 설정해서 컴포넌트 별로 자유롭게 설정 가능!
    fill="none"
  >
    <path d="M10 14L12 11L14 14L12 17L10 14Z" fill="white" />
    <g filter="url(#filter0_d_8_1347)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 6L17.5 13.8741L12 21.7205L6.5 13.8741L12 6ZM7.70385 13.8731L12 20.002L16.2961 13.8731L12 7.72248L7.70385 13.8731Z"
        fill="url(#paint0_linear_8_1347)"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_8_1347"
        x="0.5"
        y="0"
        width="23"
        height="27.7205"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="3" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 0.666667 0 0 0 0 0.666667 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_8_1347"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_8_1347"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_8_1347"
        x1="12"
        y1="6"
        x2="12"
        y2="21.7205"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF8282" />
        <stop offset="1" stopColor="#F96969" />
      </linearGradient>
    </defs>
  </svg>
);

export default CreditIcon;
