import React from 'react';

interface SohuIconProps {
  className?: string;
}

const SohuIcon: React.FC<SohuIconProps> = ({ className = 'w-6 h-6' }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 搜狐 Logo - 黄色背景 */}
      <rect width="24" height="24" rx="4" fill="#FFCC00" />
      {/* 红色狐狸 */}
      <path
        d="M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"
        fill="#C41E3A"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="#C41E3A"
        fontSize="8"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        搜狐
      </text>
    </svg>
  );
};

export default SohuIcon;
