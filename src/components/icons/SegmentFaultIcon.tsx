import React from 'react';

interface SegmentFaultIconProps {
  className?: string;
}

const SegmentFaultIcon: React.FC<SegmentFaultIconProps> = ({ className = 'w-6 h-6' }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 思否 Logo - 绿色圆形背景 */}
      <circle cx="12" cy="12" r="10" fill="#009A61" />
      {/* 内部白色 SF 字母 */}
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="white"
        fontSize="10"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        SF
      </text>
    </svg>
  );
};

export default SegmentFaultIcon;
