import React from 'react';

interface JuejinIconProps {
  className?: string;
}

const JuejinIcon: React.FC<JuejinIconProps> = ({ className = 'w-6 h-6' }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 掘金 Logo - 蓝色六边形 */}
      <path
        d="M12 2L21.5 7.5V16.5L12 22L2.5 16.5V7.5L12 2Z"
        fill="#1E80FF"
      />
      {/* 内部白色 J 字形 */}
      <path
        d="M12 6L16 8.5V13.5L12 16L8 13.5V8.5L12 6Z"
        fill="white"
      />
    </svg>
  );
};

export default JuejinIcon;
