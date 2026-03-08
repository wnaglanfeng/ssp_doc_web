// src/app/about/page.tsx
'use client';

import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            关于我们
          </h1>
          <p className="text-gray-600">
            专注于为开发者提供高性能的积分墙变现SDK解决方案
          </p>
        </div>

        {/* 核心介绍 */}
        <div className="space-y-6 mb-12">
          <p className="text-gray-700 leading-relaxed text-center">
            我们是一支专注于移动应用变现技术的工程师团队，
            致力于为开发者提供稳定、高效、易集成的积分墙变现解决方案。
          </p>
        </div>

        {/* 核心能力 */}
        <div className="grid grid-cols-1 gap-4 mb-12">
          <div className="text-center p-6 border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">技术栈</h3>
            <p className="text-gray-600 text-sm">React · TypeScript · Next.js · Node.js</p>
          </div>
          <div className="text-center p-6 border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">服务特色</h3>
            <p className="text-gray-600 text-sm">高性能SDK · 稳定可靠 · 快速集成 · 专业支持</p>
          </div>
        </div>

        {/* 联系信息 */}
        <div className="text-center">
          <h3 className="font-semibold text-gray-900 mb-4">联系我们</h3>
          <div className="space-y-2 text-gray-600">
            <div>邮箱: tech@genyuan.com</div>
            <div>GitHub: github.com/genyuan</div>
            <div>
              <a href="/doc" className="text-red-600 hover:underline">查看技术文档</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}