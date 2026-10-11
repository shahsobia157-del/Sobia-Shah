import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'dark',
  showSubtitle = true,
  size = 'md',
}) => {
  const isDark = variant === 'dark';
  
  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  }[size];

  const titleSizes = {
    sm: 'text-base tracking-[0.18em]',
    md: 'text-lg md:text-xl tracking-[0.2em]',
    lg: 'text-2xl md:text-3xl tracking-[0.22em]',
  }[size];

  const subSizes = {
    sm: 'text-[9px] tracking-[0.26em]',
    md: 'text-[10px] md:text-[11px] tracking-[0.28em]',
    lg: 'text-xs tracking-[0.3em]',
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Custom Vector Emblem: Elegant Botanical Medical Cross */}
      <div className={`relative shrink-0 ${iconDimensions} flex items-center justify-center`}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xs"
          aria-hidden="true"
        >
          {/* Subtle outer geometric ring */}
          <circle
            cx="24"
            cy="24"
            r="22"
            stroke={isDark ? '#123F46' : '#C6A66B'}
            strokeWidth="1"
            strokeOpacity="0.25"
          />
          {/* Converging Leaf Petals forming central negative space Medical Cross */}
          {/* Top Petal */}
          <path
            d="M24 6C24 6 28 14 28 18C28 20.2 26.2 22 24 22C21.8 22 20 20.2 20 18C20 14 24 6 24 6Z"
            fill={isDark ? '#123F46' : '#FAF8F3'}
          />
          {/* Bottom Petal */}
          <path
            d="M24 42C24 42 20 34 20 30C20 27.8 21.8 26 24 26C26.2 26 28 27.8 28 30C28 34 24 42 24 42Z"
            fill={isDark ? '#123F46' : '#FAF8F3'}
          />
          {/* Left Petal */}
          <path
            d="M6 24C6 24 14 20 18 20C20.2 20 22 21.8 22 24C22 26.2 20.2 28 18 28C14 28 6 24 6 24Z"
            fill={isDark ? '#123F46' : '#FAF8F3'}
          />
          {/* Right Petal */}
          <path
            d="M42 24C42 24 34 28 30 28C27.8 28 26 26.2 26 24C26 21.8 27.8 20 30 20C34 20 42 24 42 24Z"
            fill={isDark ? '#123F46' : '#FAF8F3'}
          />
          {/* Subtle Champagne Gold Central Core Accent */}
          <circle
            cx="24"
            cy="24"
            r="3.5"
            fill="#C6A66B"
          />
          {/* Refined intersecting cross hairline */}
          <line
            x1="24"
            y1="12"
            x2="24"
            y2="36"
            stroke="#C6A66B"
            strokeWidth="0.8"
            strokeOpacity="0.8"
          />
          <line
            x1="12"
            y1="24"
            x2="36"
            y2="24"
            stroke="#C6A66B"
            strokeWidth="0.8"
            strokeOpacity="0.8"
          />
        </svg>
      </div>

      {/* Typography: AUREVIA MEDICAL CENTER */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-semibold uppercase leading-none font-heading ${titleSizes} ${
            isDark ? 'text-[#123F46]' : 'text-white'
          }`}
        >
          Aurevia
        </span>
        {showSubtitle && (
          <span
            className={`font-medium uppercase leading-tight mt-0.5 ${subSizes} ${
              isDark ? 'text-[#C6A66B]' : 'text-[#C6A66B]'
            }`}
          >
            Medical Center
          </span>
        )}
      </div>
    </div>
  );
};
