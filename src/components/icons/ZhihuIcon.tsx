export default function ZhihuIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      {/* 蓝色背景 */}
      <rect width="24" height="24" rx="4" fill="#0066FF"/>
      {/* 白色"知"字 */}
      <text x="12" y="17" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="system-ui, -apple-system, sans-serif">知</text>
    </svg>
  );
}
