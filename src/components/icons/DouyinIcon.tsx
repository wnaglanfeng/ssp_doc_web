import React from 'react';

interface DouyinIconProps {
  className?: string;
}

const DouyinIcon: React.FC<DouyinIconProps> = ({ className = 'w-6 h-6' }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 抖音 Logo - 黑色背景 + 白色音符 */}
      <rect width="24" height="24" rx="4" fill="#000000" />
      <path
        d="M16.6 5.82s.63.8 1.26 1.8c.63 1 1.14 2.2 1.14 3.4v7.98c0 2.2-1.8 4-4 4s-4-1.8-4-4c0-2.2 1.8-4 4-4.2v-4c-2.2.2-4.2 1.4-5.4 3.2-.6.8-1 1.8-1 2.8 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2V9.02c1.2-.6 2.2-1.6 2.8-2.8v-2.4h-2.4c-.4 1.4-1.2 2.6-2.4 3.4V5.82h-1.4z"
        fill="white"
      />
    </svg>
  );
};

export default DouyinIcon;
