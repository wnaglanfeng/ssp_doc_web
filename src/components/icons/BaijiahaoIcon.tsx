import React from 'react';

interface BaijiahaoIconProps {
  className?: string;
}

const BaijiahaoIcon: React.FC<BaijiahaoIconProps> = ({ className = 'w-6 h-6' }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 百家号 Logo - 红色圆形 */}
      <circle cx="12" cy="12" r="10" fill="#DE0A19" />
      {/* 白色文字 */}
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        百家
      </text>
    </svg>
  );
};

export default BaijiahaoIcon;
