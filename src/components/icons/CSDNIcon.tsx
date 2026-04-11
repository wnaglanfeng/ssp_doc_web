export default function CSDNIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      {/* 定义渐变 */}
      <defs>
        <linearGradient id="faceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F8E0C8"/>
          <stop offset="100%" stopColor="#F0C8A8"/>
        </linearGradient>
        <linearGradient id="earGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F0C8A8"/>
          <stop offset="100%" stopColor="#E0B090"/>
        </linearGradient>
      </defs>
      
      {/* 左耳朵 - 位置上移，更圆润 */}
      <ellipse cx="4.5" cy="8.5" rx="3.2" ry="3.8" fill="url(#earGrad)"/>
      <ellipse cx="4.5" cy="8.5" rx="1.6" ry="2.2" fill="#E0B090"/>
      
      {/* 右耳朵 - 位置上移，更圆润 */}
      <ellipse cx="19.5" cy="8.5" rx="3.2" ry="3.8" fill="url(#earGrad)"/>
      <ellipse cx="19.5" cy="8.5" rx="1.6" ry="2.2" fill="#E0B090"/>
      
      {/* 头部轮廓 - 更大更圆 */}
      <circle cx="12" cy="12.5" r="8.5" fill="#6B4423"/>
      
      {/* 脸部 - 更宽更圆，下巴更宽 */}
      <ellipse cx="12" cy="13.5" rx="6.5" ry="6" fill="url(#faceGrad)"/>
      
      {/* 头顶毛发 - 更突出 */}
      <ellipse cx="12" cy="4.5" rx="3.5" ry="2" fill="#6B4423"/>
      <ellipse cx="10" cy="5" rx="1.5" ry="1" fill="#6B4423"/>
      <ellipse cx="14" cy="5" rx="1.5" ry="1" fill="#6B4423"/>
      
      {/* 眼镜框 - 更大更圆 */}
      <circle cx="9" cy="11.5" r="3.2" fill="none" stroke="#5D3A1A" strokeWidth="0.7"/>
      <circle cx="15" cy="11.5" r="3.2" fill="none" stroke="#5D3A1A" strokeWidth="0.7"/>
      <line x1="12.2" y1="11.5" x2="11.8" y2="11.5" stroke="#5D3A1A" strokeWidth="0.7"/>
      
      {/* 眼睛 - 黑色，位置配合眼镜 */}
      <circle cx="9" cy="11.5" r="1.3" fill="#2A2A2A"/>
      <circle cx="15" cy="11.5" r="1.3" fill="#2A2A2A"/>
      
      {/* 眼睛高光 */}
      <circle cx="9.4" cy="11.1" r="0.45" fill="white"/>
      <circle cx="15.4" cy="11.1" r="0.45" fill="white"/>
      
      {/* 鼻子 - 更小巧 */}
      <ellipse cx="12" cy="15" rx="0.7" ry="0.4" fill="#D4A085"/>
      
      {/* 嘴巴 - 微笑更可爱 */}
      <path d="M10 16.5 Q12 18 14 16.5" fill="none" stroke="#8B4513" strokeWidth="0.7" strokeLinecap="round"/>
      
      {/* 腮红 - 更明显 */}
      <ellipse cx="7.5" cy="15" rx="1.2" ry="0.7" fill="#FFB6C1" opacity="0.7"/>
      <ellipse cx="16.5" cy="15" rx="1.2" ry="0.7" fill="#FFB6C1" opacity="0.7"/>
    </svg>
  );
}
