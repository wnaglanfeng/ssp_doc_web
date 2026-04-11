import React from 'react';

interface XiaohongshuIconProps {
  className?: string;
}

const XiaohongshuIcon: React.FC<XiaohongshuIconProps> = ({ className = 'w-6 h-6' }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 小红书 Logo - 红色背景 */}
      <rect width="24" height="24" rx="4" fill="#FF2442" />
      {/* 白色文字 */}
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="10"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        小红书
      </text>
    </svg>
  );
};

export default XiaohongshuIcon;
